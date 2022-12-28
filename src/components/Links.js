import React from 'react'

function Links({linkedin, github}) {
  return (
    <div>
        <h3>Links</h3>
        <a href={linkedin}>Linkedin</a>
        <a href={github}>Github</a>
    </div>
  )
}

export default Links