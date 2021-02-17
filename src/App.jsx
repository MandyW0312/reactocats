import React, { Component } from 'react'
import { Octocat } from './components/Octocat'

export class App extends Component {
  render() {
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
          <section>
            <Octocat
              catLink="https://octodex.github.com//vinyltocat/"
              catImage="https://octodex.github.com//images/vinyltocat.png"
              number="137"
              name="Vinyltocat"
              authorLink="https://github.com/suziejurado"
              authorImage="https://github.com/suziejurado.png"
              authorName="suziejurado"
            />
            <Octocat
              catLink="https://octodex.github.com//bewitchedtocat/"
              catImage="https://octodex.github.com//images/bewitchedtocat.jpg"
              number="125"
              name="Bewitchedtocat"
              authorLink="https://github.com/heyhayhay"
              authorImage="https://github.com/heyhayhay.png"
              authorName="heyhayhay"
            />
            <Octocat
              catLink="https://octodex.github.com//mountietocat/"
              catImage="https://octodex.github.com//images/mountietocat.png"
              number="116"
              name="Mountietocat"
              authorLink="https://github.com/jeejkang"
              authorImage="https://github.com/jeejkang.png"
              authorName="jeejkang"
            />
            <Octocat
              catLink="https://octodex.github.com//luchadortocat/"
              catImage="https://octodex.github.com//images/luchadortocat.png"
              number="114"
              name="Luchadortocat"
              authorLink="https://github.com/jeejkang"
              authorImage="https://github.com/jeejkang.png"
              authorName="jeejkang"
            />
            <Octocat
              catLink="https://octodex.github.com//saritocat/"
              catImage="https://octodex.github.com//images/saritocat.png"
              number="113"
              name="Saritocat"
              authorLink="https://github.com/johncreek"
              authorImage="https://github.com/johncreek.png"
              authorName="johncreek"
            />
            <Octocat
              catLink="https://octodex.github.com//labtocat/"
              catImage="https://octodex.github.com//images/labtocat.png"
              number="105"
              name="Labtocat"
              authorLink="https://github.com/johncreek"
              authorImage="https://github.com/johncreek.png"
              authorName="johncreek"
            />
            <Octocat
              catLink="https://octodex.github.com//femalecodertocat/"
              catImage="https://octodex.github.com//images/femalecodertocat.png"
              number="102"
              name="Femalecodertocat"
              authorLink="https://github.com/jeejkang"
              authorImage="https://github.com/jeejkang.png"
              authorName="jeejkang"
            />
            <Octocat
              catLink="https://octodex.github.com//dodgetocat-v2/"
              catImage="https://octodex.github.com//images/dodgetocat_v2.png"
              number="86"
              name="Dodgetocat-v2"
              authorLink="https://github.com/tonyjaramillo"
              authorImage="https://github.com/tonyjaramillo.png"
              authorName="tonyjaramillo"
            />
            <Octocat
              catLink="https://octodex.github.com//stormtroopocat/"
              catImage="https://octodex.github.com//images/stormtroopocat.png"
              number="85"
              name="Stormtrooptocat"
              authorLink="https://github.com/jeejkang"
              authorImage="https://github.com/jeejkang.png"
              authorName="jeejkang"
            />
            <Octocat
              catLink="https://octodex.github.com//octofez/"
              catImage="https://octodex.github.com//images/octofez.png"
              number="78"
              name="Octofez"
              authorLink="https://github.com/nickh"
              authorImage="https://github.com/nickh.png"
              authorName="nickh"
            />
            <Octocat
              catLink="https://octodex.github.com//octdrey-catburn/"
              catImage="https://octodex.github.com//images/octdrey-catburn.jpg"
              number="45"
              name="Octdrey Catburn"
              authorLink="https://github.com/cameronmcefee"
              authorImage="https://github.com/cameronmcefee.png"
              authorName="cameronmcefee"
            />
            <Octocat
              catLink="https://octodex.github.com//total-eclipse-of-the-octocat/"
              catImage="https://octodex.github.com//images/total-eclipse-of-the-octocat.jpg"
              number="29"
              name="Total Eclipse of the Octocat"
              authorLink="https://github.com/cameronmcefee"
              authorImage="https://github.com/cameronmcefee.png"
              authorName="cameronmcefee"
            />
          </section>
        </main>

        <footer>
          <p>© 2013-2020 GitHub, Inc. All rights reserved.</p>
        </footer>
      </div>
    )
  }
}
