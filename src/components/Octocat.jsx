import React from 'react'

export class Octocat extends React.Component {
  render() {
    return (
      <article>
        <a href="https://octodex.github.com//bewitchedtocat/">
          <img
            className="image"
            src="https://octodex.github.com//images/bewitchedtocat.jpg"
            width="400"
            height="400"
            alt="Bewitchedtocat"
          />
        </a>
        <ul>
          <li>
            #125:
            <a href="https://octodex.github.com//bewitchedtocat/">
              <strong>Bewitchedtocat</strong>
            </a>
          </li>
          <li>
            <a href="https://github.com/heyhayhay">
              <img
                src="https://github.com/heyhayhay.png"
                width="24px"
                height="24px"
                alt="heyhayhay"
              />
            </a>
          </li>
        </ul>
      </article>
    )
  }
}
