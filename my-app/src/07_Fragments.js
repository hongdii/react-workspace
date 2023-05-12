import React , {Component} from 'react';

/*
    Fragments ? 
    return되는 컴포넌트를 감싸는 틀

    컴포넌트 단위로 요소를 return할때 반드시 1개의 요소만 반환할수 있기 때문에 여러개의 태그요소를 반환하고 싶다면
    반드시 하나의 html요소 태그로 감싸주어야한다.    
    
    반환되는값이 여러개의 태그요소인 경우 에러가 발생할수 있다.

    이때 Fragements태그를 활용하면 불필요한 html코드를 없애고 여러개의 요소를 반환할수있다.
    */

class Fragements extends Component{

    render(){
        return(
            /* 에러를 해결하기 위해 div태그로 감싸는건 좋지못한 방법이다. */
            // <div>
            //     <td>리액트 Fragements</td>
            //     <td>리액트 Fragements</td>
            // </div>
            // <React.Fragment>  화면상에 표현되지않음
            //     <td>리액트 Fragements</td>
            //     <td>리액트 Fragements</td>
            // </React.Fragment>

            // React.Fragment 태그와 같음 화면상에 표현되지않음
            <> 
                <td>리액트 Fragements</td>
                <td>리액트 Fragements</td>
            </>

            )
    }
}

export default Fragements;