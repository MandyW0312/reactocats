import React from 'react'

export class Octocat extends React.Component {
  render() {
    return (
      <article>
        <a href={this.props.catLink}>
          <img
            className="image"
            src={this.props.catImage}
            width="400"
            height="400"
            alt={this.props.name}
          />
        </a>
        <ul>
          <li>
            #{this.props.number}:
            <a href={this.props.catLink}>
              <strong>{this.props.name}</strong>
            </a>
          </li>
          <li>
            <a href={this.props.authorLink}>
              <img
                src={this.props.authorImage}
                width="24px"
                height="24px"
                alt={this.props.authorName}
              />
            </a>
          </li>
        </ul>
      </article>
    )
  }
}
