import React from 'react';
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut } from "react-scroll-motion";
import { ToastContainer, toast } from 'react-toastify';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
  const FadeUp = batch(Fade(), Move(), Sticky());

  const notify = () => toast.success(' Wow Success Fully Update!', {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });

  const warning = () => toast.warn('Please reSign your account', {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });


  return (
    <div className="App">
      <ScrollContainer>
        <ScrollPage>
          <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
            
              <h1>Hellow World</h1>
              <button onClick={notify}>Update</button>
              <button onClick={warning}>Warning</button>
              <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
              />
            
          </Animator>
        </ScrollPage>
        <ScrollPage>
          <Animator animation={ZoomInScrollOut}>
            <button onClick={notify}>Update</button>
            <button onClick={warning}>Warning</button>
            <ToastContainer
              position="top-center"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="colored"
            />
          </Animator>
        </ScrollPage>
        <ScrollPage>
          <Animator animation={FadeUp}>
            <span style={{ fontSize: "40px" }}>I'm FadeUp ⛅️</span>
          </Animator>
        </ScrollPage>
        <ScrollPage>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }} >
            <span style={{ fontSize: "40px" }}>
              <Animator animation={MoveIn(-1000, 0)}>Hello Guys 👋🏻</Animator>
              <Animator animation={MoveIn(1000, 0)}>Nice to meet you 🙋🏻‍♀️</Animator>
              - I'm Dante Chun -
              <Animator animation={MoveOut(1000, 0)}>Good bye ✋🏻</Animator>
              <Animator animation={MoveOut(-1000, 0)}>See you 💛</Animator>
            </span>
          </div>
        </ScrollPage>
        <ScrollPage>
          <Animator animation={batch(Fade(), Sticky())}>
            <span style={{ fontSize: "40px" }}>Done</span>
            <br />
            <span style={{ fontSize: "30px" }}>
              There's FadeAnimation, MoveAnimation, StickyAnimation, ZoomAnimation
            </span>
          </Animator>
        </ScrollPage>
      </ScrollContainer>
      
    </div>
  );
}

export default App;
