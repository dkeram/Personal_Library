# Dockerfile (backend)
FROM python:3.11-slim-bullseye

# Set working directory
WORKDIR /app

# Upgrade system packages to address vulnerabilities
RUN apt-get update && apt-get upgrade -y && apt-get install -y \
    build-essential libpq-dev curl \
    && rm -rf /var/lib/apt/lists/*

# Install dependencies
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy project files
COPY . .

# Collect static files
RUN python manage.py collectstatic --noinput

# Expose Django port
EXPOSE 8000

# Run Django server (or use gunicorn for production)
CMD ["gunicorn", "myproject.wsgi:application", "--bind", "0.0.0.0:8000"]
