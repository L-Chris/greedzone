pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        sh '''
          yarn
          yarn build
        '''
      }
    }
    stage('Deploy') {
      steps {
      }
    }
  }
}