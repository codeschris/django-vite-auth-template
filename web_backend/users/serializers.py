from django.contrib.auth.models import User
from users.models import UserProfile
from rest_framework.serializers import ModelSerializer, CharField

class UserSerializer(ModelSerializer):
    password = CharField(write_only=True)

    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'password']

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        return user

class UserProfileSerializer(ModelSerializer):
    class Meta:
        model = UserProfile
        fields = ['id', 'profile_picture']
        read_only_fields = ['user']
