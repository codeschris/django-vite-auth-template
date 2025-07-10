from rest_framework.permissions import IsAuthenticated
from .models import UserProfile
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework import viewsets, status
from rest_framework.response import Response
from rest_framework.decorators import action
from django.contrib.auth import authenticate, login, logout
from rest_framework.authtoken.models import Token
from rest_framework.permissions import AllowAny
from .serializers import UserSerializer
from drf_spectacular.utils import extend_schema, OpenApiParameter, OpenApiExample
from drf_spectacular.types import OpenApiTypes

@extend_schema(tags=['Authentication'])

class AuthViewSet(viewsets.ViewSet):
    permission_classes = [AllowAny]

    @action(detail=False, methods=['post'])
    def register(self, request):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            token, _ = Token.objects.get_or_create(user=user)
            return Response({'token': token.key, 'user': UserSerializer(user).data})
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    @extend_schema(
        request=OpenApiTypes.OBJECT,
        responses={
            200: OpenApiTypes.OBJECT,
            400: OpenApiTypes.OBJECT,
        },
        examples=[
            OpenApiExample(
                'Valid credentials',
                value={'username': 'john', 'password': 'secret'},
                request_only=True
            ),
            OpenApiExample(
                'Success response',
                value={'id': 1, 'username': 'john', 'email': 'john@example.com'},
                response_only=True
            ),
        ]
    )
    @action(detail=False, methods=['post'])
    def login(self, request):
        username = request.data.get('username')
        password = request.data.get('password')
        user = authenticate(request, username=username, password=password)
        if user:
            login(request, user)  # session login
            token, _ = Token.objects.get_or_create(user=user)
            return Response({'token': token.key, 'user': UserSerializer(user).data})
        return Response({'error': 'Invalid credentials'}, status=status.HTTP_400_BAD_REQUEST)

    @action(detail=False, methods=['post'])
    def logout(self, request):
        if request.auth:
            request.auth.delete()
        logout(request)
        return Response({'message': 'Logged out successfully'}, status=status.HTTP_200_OK)

    @action(detail=False, methods=['get'])
    def user(self, request):
        if request.user.is_authenticated:
            return Response(UserSerializer(request.user).data)
        return Response({'error': 'Not authenticated'}, status=status.HTTP_401_UNAUTHORIZED)

@extend_schema(tags=['User Profile'])
class UserProfileViewSet(viewsets.ModelViewSet):
    permission_classes = [IsAuthenticated]
    parser_classes = (MultiPartParser, FormParser)

    def get_queryset(self):
        return UserProfile.objects.filter(user=self.request.user)

    @action(detail=False, methods=['get'])
    def profile(self, request):
        profile, created = UserProfile.objects.get_or_create(user=request.user)
        return Response({
            'id': profile.id,
            'username': request.user.username,
            'email': request.user.email,
            'bio': request.user.bio,
            'profile_picture': request.build_absolute_uri(
                profile.profile_picture.url) if profile.profile_picture else None
        })

    @action(detail=False, methods=['patch'], parser_classes=[MultiPartParser])
    def update_profile_picture(self, request):
        profile, created = UserProfile.objects.get_or_create(user=request.user)
        if 'profile_picture' in request.FILES:
            profile.profile_picture = request.FILES['profile_picture']
            profile.save()
            return Response({'message': 'Profile picture updated successfully'})
        return Response({'error': 'No profile picture provided'}, status=status.HTTP_400_BAD_REQUEST)