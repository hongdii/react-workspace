import axios from "axios";

import {Component} from 'react';

/*
    콜백 함수?
    자바스크립트의 함수중 몇몇 코드중 비동기적으로 작동하는 코드는
    실행된 작업이 끝나지 않았더라도 다음작업이 시작될수 있는데, 이때 특정코드를 내가 원하는 시점에
    실행될수 있도록 컨트롤해줘야할때 콜백함수를 사용한다.  
    (일반함수 -> stack, 비동기함수 -> queqe)

    Promise?
    콜백함수와 마찬가지로 비동기적으로 동작하는 코드를 동기적으로 구현할때 사용한다. 차이점은 콜백함수에 비해서
    가독성을 높일수 있고, 예외처리를 쉽게 처리할 수 있다.
*/

class Callback extends Component{

    componentDidMount(){
        this.logPrint(1, function(return1){
            console.log("return1 : "+ return1);
            this.logPrint(return1, function(return2){
                console.log("return2 : "+return2);   
            
            })
            /*
                콜백함수를 이용하여도 내가 원하는 실행 흐름대로 코드를 작성할수는 있다.
                하지만 콜백함수를 여러번 사용할수록 코드가 더 지저분해진다는 단점도 존재함.
                이때 대체대로 나온 기능이 promise
            */
        }.bind(this)
        /*
            화살표함수가 아닌 익명함수는 this가 window객체로 바인드되기 때문에 this가 현재 객체를 따라갈수 있도록
            bind메서드 사용함
            익명함수는 this가 동적으로 바인딩되고(호출한 객체에 바인딩)
            arrow함수는 this가 정적으로 바인딩됨
        */
        
        );
    }

            // 변수 , 함수(function)
    logPrint(param, callback){
        console.log("logPrint param : "+param);
        param += param; // 전달받은 파람값에 다시 파람값을 더해준후
        callback(param); // 매개변수로 전달받은 함수의 파라미터로 다시넣고 함수를 실행함
    }

    render(){
        return(
            <h1>axios Get</h1>
        )
    }
}

class PromiseThen extends Component{

    componentDidMount(){
        /**
         * promise에는 대기, 이행, 거부의 개념이 있다.
         * 대기상태에서 이행상태로 변할때  then() 안에 있는 함수가 실행된다.
         */
        new Promise(
            resolve => {
                // setTime === ajax : 비동기 처리
                setTimeout(function(){
                    resolve('promise');
                    // 1.5초 후에 resolve함수가 실행되며 이때 이행상태로 변경이 되면서
                    // 바로 뒤에있는 then함수가 실행됨
                }, 1500);
            }
        )
        .then(function(result){
            console.log(result);
            return result+' then'; // 반환되는 순간에 다음 then함수가 실행됨
        })
        .then(
            result => {
                console.log(result);
            }
        )
    }

    render(){
        return(
            <h1>promise catch</h1>
        )
    }
}

class PromiseCatch extends Component{

    componentDidMount(){
        /*  
            reject ? 대기, 이행, 거부중 거부상태가 됐을때 catch함수를 실행한다.
            작업중 에러가 발생해 이행상태로 변화되지 못하는 경우 예외처리구문을 작성한다.
        */
       new Promise(
        (resolve, reject) => {
            // 첫번째 파라미터는 무조건 이행함수, 두번째 파라미터는 거부함수로 사용하면된다.
            reject(Error("Error"));
            resolve("promise");
            // 무조건 reject를 실행시키면서 error객체를 이용해 에러를 발생시킨다.         
        }
       ).then(function(result){
        console.log(result);
        return result + ' then';
       })
       .catch(
        result => console.log("catch "+result)
       );
    }

    render(){
        return(
            <h1>promise</h1>
        )
    }
}



export {Callback, PromiseThen, PromiseCatch};