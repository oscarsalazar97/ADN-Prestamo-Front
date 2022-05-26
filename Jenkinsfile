@Library('ceiba-jenkins-library') _
pipeline {
  //Donde se va a ejecutar el Pipeline
  //agent any
  agent {
    label 'Slave_Induccion'
  }

  //Opciones específicas de Pipeline dentro del Pipeline
  options {
    	buildDiscarder(logRotator(numToKeepStr: '3'))
 	disableConcurrentBuilds()
  }

stages{
    stage('Checkout') {
      steps{
        echo "------------>Checkout<------------"
        checkout scm
      }
    }

     stage('nstall modules') {
      steps {
        echo "------------>Install modules<------------"
        withEnv(['NPM_CONFIG_LOGLEVEL=warn']) {
          sh 'npm install'
        }
      }
    }

    stage('Test Unit') {
      steps {
        echo "------------>Test<------------"
        //sh 'npm run test -- --watch=false --browsers ChromeHeadless'
        sh 'ng test --watch=false --browsers=ChromeHeadless'
        
      }
    }

    // stage('Test end-to-end') {
    //     steps{
    //         echo "------------>Testing Protractor<------------"
    //         sh 'npm run e2e'
    //     }
    // }
    stage('Static Code Analysis') {
      steps{
				sonarqubeMasQualityGatesP(sonarKey:'co.com.ceiba.adn:prestamos.front.oscar.salazar',
				  sonarName:'"ADN-Prestamos-Front(oscar.salazar)"',
				  sonarPathProperties:'./sonar-project.properties')
			}
    }

    stage('Build') {
      steps {
        echo "------------>Build<------------"
        sh 'npm run build'
      }
    }
  }

  }
   post {
        failure {
            echo 'pipeline falló'
            mail(
                to: 'oscar.salazar@ceiba.com.co',
                body:"Something is wrong with ${env.BUILD_URL}",
                subject: "Failed Pipeline:${currentBuild.fullDisplayName}"
            )
        }
        success {
            echo 'This will run only if successful'
        }
    }
}