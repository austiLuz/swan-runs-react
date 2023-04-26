import React from 'react';
import './about.css'

const about = () => {
  return (
    <div className='about-container section__padding' id='about'>
        <div className='about-text'>
            <h2>Why are there two Marathon routes?</h2>
            <p>There are two because the Henny / Cornard floodplain can sometimes be under-water. I’ve therefore tacked on a drier loop via Ballingdon / Sudbury / Cornard(s). The same extra route can be used for the half, but as it’s a already a ‘country’ half aka a little longer than an actual half, I thought I shouldn’t call it an alternative half marathon.</p>
            <h2>Why it exists</h2>
            <p>I - <a href='https://www.strava.com/athletes/13867251'>Mike Austin</a> created the Swan Runs as I grew up in Great Henny, worked at the Henny Swan, and have run a lot around the area. I was inspired to help the pub recover post-covid. It’s been so wonderful to have it back in the village.

I loved the idea of joining up routes I know and love in the beautiful local area, and sharing them with others who might want to run around.</p>
        </div>
    </div>
  )
}

export default about