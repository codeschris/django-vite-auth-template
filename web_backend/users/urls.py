from rest_framework.routers import DefaultRouter
from .views import AuthViewSet, UserProfileViewSet

router = DefaultRouter()
router.register(r'auth', AuthViewSet, basename='auth')
router.register(r'profile', UserProfileViewSet, basename='profile')

urlpatterns = router.urls