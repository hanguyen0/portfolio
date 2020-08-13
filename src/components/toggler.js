import React from 'react'
import { ThemeToggler } from 'gatsby-plugin-dark-mode'

class MyComponent extends React.Component {
  render() {
    return (
      <ThemeToggler>
        {({ theme, toggleTheme }) => {
          // Don't render anything at compile time. Deferring rendering until we
          // know which theme to use on the client avoids incorrect initial
          // state being displayed.
          if (theme == null) {
            return null
          }
          return (
            <div className="theme-switch-wrapper">
              <label className="theme-switch" forHTML="checkbox">
                <input
                  type="checkbox"
                  onChange={(e) =>
                    toggleTheme(e.target.checked ? 'dark' : 'light')
                  }
                  checked={theme === 'dark'}
                />{' '}
                <div className="slider round"></div>
                {/* Dark mode */}
              </label>
              <em>Dark Mode</em>
            </div>
          )
        }}
      </ThemeToggler>
    )
  }
}

export default MyComponent;