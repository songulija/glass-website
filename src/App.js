import React from 'react'
import './App.css';
import avatar from './images/avatar.png'
import twitch from './images/twitch.png'
import steam from './images/steam.png'
import upcoming from './images/upcoming.png'
import library from './images/library.png'
import controller from './images/controller.png'
import assassins from './images/assassins.png'
import sackboy from './images/sackboy.png'
import spiderman from './images/spiderman.png'

function App() {
  return (
    // glass section
    <div>
      {/* main part holds all basically all info */}
      <main>
        <div className="glass">
          {/* first add dashboard on left side, it has user section, links, and one more*/}
          <div className='dashboard'>
            <div className='user'>
              <img src={avatar} alt='' />
            </div>

            <div className='links'>
              {/* will have multiple links as containers */}
              <div className='link'>
                <img src={twitch} alt='' />

                <h2>Streams</h2>
              </div>
              <div className='link'>
                <img src={steam} alt='' />
                <h2>Games</h2>
              </div>
              <div className='link'>
                <img src={upcoming} alt='' />
                <h2>New</h2>
              </div>
              <div className='link'>
                <img src={library} alt='' />
                <h2>Library</h2>
              </div>
            </div>

            <div className='pro'>
              <h2>Join pro for free games.</h2>
              <img src={controller} alt='' />
            </div>
          </div>

          {/* glass will have dashboard section, and  games section*/}
          <div className='games'>
            {/* it has status, and then bellow it'll have multiple cards */}
            <div className='status'>
              <h1>Active Games</h1>
              <input type='text' />
            </div>

            {/* cards container will have multiple cards in it */}
            <div className='cards'>
              <div className='card'>
                <img src={assassins} alt='' />
                <div className='card_info'>
                  <h2>Assassins Creed Valhalla</h2>
                  <p>PS5 Version</p>
                  <div className='progress'></div>
                </div>
                <h2 className='percentage'>60%</h2>
              </div>


              <div className='card'>
                <img src={sackboy} alt='' />
                <div className='card_info'>
                  <h2>Assassins Creed Valhalla</h2>
                  <p>PS5 Version</p>
                  <div className='progress'></div>
                </div>
                <h2 className='percentage'>60%</h2>
              </div>

              <div className='card'>
                <img src={spiderman} alt='' />
                <div className='card_info'>
                  <h2>Assassins Creed Valhalla</h2>
                  <p>PS5 Version</p>
                  <div className='progress'></div>
                </div>
                <h2 className='percentage'>60%</h2>
              </div>


            </div>
          </div>


        </div>
      </main>
      {/* these circles will be behind glass. just images */}
      <div className='circle1'></div>
      <div className='circle2'></div>

    </div>
  );
}

export default App;
