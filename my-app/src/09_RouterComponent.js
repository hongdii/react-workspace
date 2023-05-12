/*
    라우팅 ? 호출되는 url에 따라 페이지 이동을 설정하는 기능
    react에서 사용자가 보게될 view는 컴포넌트를 사용함.

    라우터를 지원하는 패키지 다운로드
    1. npm install --save react-router-dom

    react-router-dom은 BrowserRouter , Router , Link기능을 제공함.
    Route는 호출되는 url에 따라 이동할 Component를 정의함
    Link는 <a>태그와 같이 페이지에 표시되는 링크를 클릭하면 url을 호출한다.
    Route와 Link를 사용하기 위해서는 BrowserRouter라는 태그로 감싸서 사용해야한다.

*/
import React from 'react';
import {Route, Routes} from 'react-router-dom';

import { BrowserRouter } from 'react-router-dom';

import ReactRouter from './router/reactRouter1';
import ReactRouter2 from './router/reactRouter2';

class RouterComponent extends React.Component{
    render(){
        return(
            <div>
                {/* <BrowserRouter> */}
                    {/* 라우트를 사용하기 위해서는 BrowserRoute 태그로 감싸줘야한다. */}
                    <Routes>
                        {/* url경로를 여러개 지정하기위해서는 Routes를 사용해야한다. */}

                        {/* path속성 : 호출되는 url경로. elements: url호출시 사용할 컴포넌트 지정 */}
                        <Route path='/' element={<ReactRouter/>} />
                        {/* 루트경로 호출시 reactRouter컴포넌트가 실행되도록 설정 */}
                        
                        <Route path='/reactRouter2' element={<ReactRouter2/>} />

                        
                    </Routes>
                
                {/* </BrowserRouter> */}
                {/* 
                    RouterComponent.js 는 라우팅 전용 컴포넌트로 사용될 예정
                    RouterComponent컴포넌트와 하위컴포넌트에서 Route와 Link를 사용할때마다
                    BrowserRouter태그로 감싸서 사용해도 되지만, 최상위 컴포넌트에
                    BrowserRouter를 추가하게되면 모든 후손 컴포넌트에서 라우팅 기능(route, link)를
                    사용할수 있다.
                */}
            </div>
        )
    }
}
export default RouterComponent;

