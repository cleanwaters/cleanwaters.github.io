import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline } from 'react-gsap';

export const ScrollMagicExampleBottles = ({ beforeTimeline }) => {
  return (
    <Controller>
      <div>
        <Scene
          // triggerHook="100"
          offset='520'
          duration={1000}
          pin
        >
          {(progress) => (
            <div className='mtff-4'>
              <div
                style={{ height: '50vh' }}
                className='d-flex align-items-end'
              >
                <div>{beforeTimeline}</div>
              </div>

              <Timeline totalProgress={progress} paused>
                <Tween
                  from={{ opacity: '0.8', top: '0' }}
                  to={{ opacity: '0.1', top: '27px' }}
                >
                  <div
                    className='d-flex justify-content-around'
                    style={{ display: '', height: '10vh' }}
                  >
                    {/* layer 1 */}
                    {[1, 2, 3].map((item) => (
                      <div
                        style={{ width: '100%', padding: '20px' }}
                        key={item}
                      >
                        <div
                          // style={{ width: '100%', height: '100%', background: '#48BEFF' }}
                          style={{
                            background: `url(${
                              process.env.PUBLIC_URL + '/layer_1_big_bottle.svg'
                            })`,
                            width: '100%',
                            backgroundSize: 'contain',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center center',
                            height: '20vh',
                            zIndex: 4000,
                          }}
                          key={item}
                        ></div>
                      </div>
                    ))}
                  </div>
                </Tween>

                <Tween
                  from={{ opacity: '0.8', top: '0px' }}
                  to={{ opacity: '0.2', top: '27px' }}
                >
                  <div
                    className='d-flex justify-content-around'
                    style={{ display: '', height: '10vh' }}
                  >
                    {/* layer 2 */}
                    {[1, 2, 3].map((item) => (
                      <div style={{ width: '100%', zIndex: -2000 }} key={item}>
                        <div
                          style={{
                            background: `url(${
                              process.env.PUBLIC_URL +
                              '/layer_2_mid_bottles.png'
                            })`,
                            width: '100%',
                            backgroundSize: 'contain',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center center',
                            height: '20vh',
                          }}
                          key={item}
                        ></div>
                      </div>
                    ))}
                  </div>
                </Tween>

                <Tween
                  from={{ opacity: '1', top: '0px' }}
                  to={{ opacity: '0.2', top: '27px' }}
                >
                  <div
                    className='d-flex justify-content-around'
                    style={{ display: '', height: '10vh' }}
                  >
                    {/* layer 3 */}
                    {[1, 2, 3].map((item) => (
                      <div style={{ width: '100%' }} key={item}>
                        <div
                          style={{
                            background: `url(${
                              process.env.PUBLIC_URL +
                              '/layer_3_mid_bottles.png'
                            })`,
                            width: '100%',
                            backgroundSize: 'contain',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center center',
                            height: '20vh',
                          }}
                          key={item}
                        ></div>
                      </div>
                    ))}
                  </div>
                </Tween>

                <Tween
                  from={{ opacity: '0.8', top: '0' }}
                  to={{ opacity: '0.1', top: '27px' }}
                >
                  <div
                    className='d-flex justify-content-around'
                    style={{ display: '', height: '10vh' }}
                  >
                    {/* layer 4 */}
                    {[1, 2, 3].map((item) => (
                      <div style={{ width: '100%' }} key={item}>
                        <div
                          // style={{ width: '100%', height: '100%', background: '#48BEFF' }}
                          style={{
                            background: `url(${
                              process.env.PUBLIC_URL +
                              '/layer_4_mid_bottles.png'
                            })`,
                            width: '100%',
                            backgroundSize: 'contain',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center center',
                            height: '20vh',
                          }}
                          key={item}
                        ></div>
                      </div>
                    ))}
                  </div>
                </Tween>
              </Timeline>
            </div>
          )}
        </Scene>
      </div>
    </Controller>
  );
};
