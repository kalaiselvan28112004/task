pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Docker Build') {
            steps {
                sh 'docker compose build'
            }
        }

        stage('Cleanup Old Stack') {
            steps {
                sh 'docker compose down || true'
            }
        }

        stage('Docker Up') {
            steps {
                sh 'docker compose up -d'
            }
        }
    }
}
