pipeline {
    agent any

    stages {
        stage('Clone Repo') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/nikhil3939/devops-app.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t devops-app .'
            }
        }

        stage('Stop Old Container') {
            steps {
                sh 'docker rm -f devops-container || true'
            }
        }

        stage('Run New Container') {
            steps {
                sh 'docker run -d --name devops-container -p 3000:3000 devops-app'
            }
        }
    }
}
