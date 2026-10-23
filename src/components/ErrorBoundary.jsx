import { Component } from 'react';
import { Link } from 'react-router-dom';

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('[ErrorBoundary] Caught render error:', error, errorInfo);
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null });
  };

  render() {
    if (this.state.hasError) {
      return (
        <section className="error-boundary-container" role="alert" aria-live="assertive">
          <div className="error-boundary-card">
            <span className="error-boundary-icon" aria-hidden="true">⚠️</span>
            <h1>Щось пішло не так</h1>
            <p>
              Сталася неочікувана помилка під час відображення цієї сторінки або навчальної роботи.
            </p>
            {import.meta.env.DEV && this.state.error ? (
              <pre className="error-boundary-details">
                {this.state.error.message || String(this.state.error)}
              </pre>
            ) : null}
            <div className="error-boundary-actions">
              <button
                type="button"
                className="error-boundary-btn error-boundary-btn--primary"
                onClick={this.handleReset}
              >
                Спробувати знову
              </button>
              <Link
                to="/"
                className="error-boundary-btn error-boundary-btn--secondary"
                onClick={this.handleReset}
              >
                На головну
              </Link>
            </div>
          </div>
        </section>
      );
    }

    return this.props.children;
  }
}
