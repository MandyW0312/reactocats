import React, { Component } from 'react'
import { Octocat } from './components/Octocat'
import octocats from './octocats'

export class App extends Component {
  render() {
    const octocatsFromData = octocats.map(octocat => (
      <Octocat
        catLink={octocat.catLink}
        catImage={octocat.catImage}
        number={octocat.number}
        name={octocat.name}
        authorLink={octocat.authorLink}
        authorImage={octocat.authorImage}
        authorName={octocat.authorName}
      />
    ))
    return (
      <div>
        <header>
          <nav>
            <ul>
              <li>
                <a href="#">
                  <img
                    src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                    width="45rem"
                    height="45rem"
                    alt="GithubLogo"
                  />
                </a>
              </li>
              <li className="octodex">
                <a href="#">Octodex</a>
              </li>
              <li className="active">
                <a href="#">Home</a>
              </li>
              <li>
                <a href="https://octodex.github.com/faq/">FAQ</a>
              </li>
            </ul>
          </nav>
          <nav>
            <ul>
              <li>
                <a href="https://twitter.com/githubdesign">
                  Follow us on Twitter
                </a>
              </li>
              <li className="github">
                <a href="https://github.com/">Back to GitHub.com</a>
              </li>
            </ul>
          </nav>
        </header>

        <main>
          <section>{octocatsFromData}</section>
        </main>

        <footer>
          <p>© 2013-2020 GitHub, Inc. All rights reserved.</p>
        </footer>
      </div>
    )
  }
}
