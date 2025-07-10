from django.contrib.auth import get_user_model
from users.models import UserProfile
from rest_framework.serializers import ModelSerializer, CharField

User = get_user_model()

class UserSerializer(ModelSerializer):
    password = CharField(write_only=True)

    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'first_name', 'last_name', 'password']

    def create(self, validated_data):
        password = validated_data.pop('password', None)
        user = User(**validated_data)
        if password is not None:
            user.set_password(password)
        user.save()
        return user

class UserProfileSerializer(ModelSerializer):
    class Meta:
        model = UserProfile
        fields = ['id', 'profile_picture']
        read_only_fields = ['user']
