from django.shortcuts import render, redirect
from .models import User

# Create your views here.
# Function to handle user registration.
def register(request):
    if request.method == 'POST':
        first_name = request.POST.get('first_name')
        last_name = request.POST.get('last_name')
        username = request.POST.get('username')
        email = request.POST.get('email')
        password = request.POST.get('password')

        # Create a new user instance
        user = User(
            first_name=first_name,
            last_name=last_name,
            username=username,
            email=email,
            password=password
        )
        user.save()

        # Redirect to login page after registration
        return redirect('login')  
    return render(request, 'authentication/register.html')

# Function to handle user login.
def login(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')

        # Authenticate user
        try:
            user = User.objects.get(username=username, password=password)
            request.session['user_id'] = user.id  # Store user ID in session
            return redirect('dashboard')  # Redirect to dashboard after login
        except User.DoesNotExist:
            error_message = "Invalid username or password"
            return render(request, 'authentication/login.html', {'error': error_message})

    return render(request, 'authentication/login.html')


# Function to handle user logout.
def logout(request):
    # Clear the session
    request.session.flush()

    # Redirect to login page after logout
    return redirect('login')
    return HttpResponse("User Logout successful")
