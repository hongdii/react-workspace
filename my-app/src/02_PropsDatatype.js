import datatype from 'prop-types';
import {Component} from 'react';
/*
    prop-types?
    일반적으로 자바스크립트의 유연한 특성은 개발을 하는데있어 도움을 주지만,
    관리해야할 파일이 많아지면 생산성 및 유지보수성이 떨어진다라는 단점이이있음

    이런점 때문에 명확한 자료형으로 개발을 해야하는 타입스크립트가 각광받고 있는 추세인데,
    반드시 자바스크립트로 개발을 해야만하는 상황에서는 이문제를 PropTypes를 활용하여 해결한다.

    propTypes는 부모로부터 전달받은 prop데이터의 type(자료형)을 검사해준다.
    자식컴포넌트에서 명시해놓은 데이터타입과 부모로부터 넘겨받은 데이터 타입이 일치하지 않으면
    콘솔에 경고가 띄워진다.
*/

class PropsDatatype extends Component{
    render(){
        let{String, Number, Boolean, Array, ObjectJson, Function} = this.props;
        /*
            객체를 변수로 저장하는 es6 방식(구조 분해 할당)
        */
       console.log(this.props);
       return(
            <div style={{padding:"0px"}}>
                {/* alt+shift+키보드 */}
                <p>StringProps : {String}</p>
                <p>NumberProps : {Number}</p>
                {/* Boolean의 기본값은 true */}
                <p>BooleanProps : {Boolean.toString()}</p>
                <p>ArrayProps : {Array.toString()}</p>
                {/* ObjectJson.toString() ==> [object Object] */}
                <p>ObjectJsonProps : {JSON.stringify(ObjectJson)}</p>
                <p>FunctionProps : {Function}</p>
                {/* <p>StringDefaultProps : {StringDefault}</p> 작동안함 */}

            </div>
       )
    }
}

PropsDatatype.propTypes={
    //String : datatype.number, /* 자료형 불일치 에러. 대입되는 값의 자료형을 명확하게 전달해줘야함 */
    String : datatype.string,
    Number : datatype.number,
    Boolean : datatype.bool,
    Array : datatype.array,
    ObjectJson : datatype.object,
    // 객체 내부의 자료형을 선언할때는 shape유형을 사용함
    ObjectJson : datatype.shape({
       react : datatype.string.isRequired,
       today: datatype.number.isRequired 
    }),

    Function : datatype.func,
    IsRequired : datatype.string.isRequired
    
}
PropsDatatype.defaultProps = {
    StringDefault : "기본값" // 기본값
};

/*
    PropTypes사용시 속성값의 타입만 알아도 해당 컴포넌트의 구조를 어느정도 파악하기 쉽다라는 장점이있음
    따라서 각 컴포넌트(모듈)의 퀄리티를 높이기 위해서 PropTypes를 사용하는것을 권장한다.
*/

// 하나값 넘길때는 default 무조건 적기
export default PropsDatatype;