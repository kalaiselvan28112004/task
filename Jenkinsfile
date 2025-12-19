@Library('my-shared-lib') _
pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build & Run with Library') {
            steps {
                // Call the function from vars/myDockerSteps.groovy
                myDockerSteps.buildAndUp()
            }
        }
    }
}

