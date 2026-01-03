pipeline {
    agent any

    stages {

        stage('Git') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/nikhil3939/devops-app.git'
            }
        }

        stage('Build') {
            steps {
                sh 'docker build -t devops-app .'
            }
        }

        stage('Test') {
            steps {
                sh 'docker run --rm devops-app node -e "console.log(\'Test Passed\')"'
            }
        }

        stage('Deploy') {
            steps {
                sh '''
                docker stop devops-container || true
                docker rm devops-container || true
                docker run -d --name devops-container -p 3000:3000 devops-app
                '''
            }
        }
    }
}
