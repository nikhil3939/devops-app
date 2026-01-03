pipeline {
    agent any

    options {
        skipDefaultCheckout(true)
    }

    stages {

        stage('Checkout Code') {
            steps {
                checkout([
                    $class: 'GitSCM',
                    branches: [[name: '*/main']],
                    userRemoteConfigs: [[
                        url: 'https://github.com/nikhil3939/devops-app.git'
                    ]]
                ])
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t devops-app .'
            }
        }

        stage('Stop Old Container') {
            steps {
                sh '''
                docker ps -q --filter "publish=3000" | xargs -r docker stop
                docker ps -aq --filter "publish=3000" | xargs -r docker rm
                '''
            }
        }

        stage('Run New Container') {
            steps {
                sh 'docker run -d --name devops-container -p 3000:3000 devops-app'
            }
        }
    }
}
