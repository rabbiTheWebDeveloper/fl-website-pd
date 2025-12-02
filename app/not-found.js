export default function NotFound() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        fontFamily: 'system-ui, -apple-system, sans-serif',
        padding: '2rem',
        textAlign: 'center',
        backgroundColor: '#f8f9fa',
      }}
    >
      <h2
        style={{
          fontSize: '2rem',
          fontWeight: 'bold',
          color: '#1a1a1a',
          marginBottom: '1rem',
        }}
      >
        Not Found
      </h2>
      <p
        style={{
          fontSize: '1.125rem',
          color: '#666',
          marginBottom: '2rem',
          maxWidth: '400px',
          lineHeight: '1.6',
        }}
      >
        Could not find requested resource
      </p>
      <a
        href="/"
        style={{
          display: 'inline-block',
          padding: '0.75rem 1.5rem',
          backgroundColor: '#0070f3',
          color: 'white',
          textDecoration: 'none',
          borderRadius: '0.375rem',
          fontWeight: '500',
          transition: 'background-color 0.2s ease',
        }}
        // onMouseOver={(e) => {
        //   e.currentTarget.style.backgroundColor = '#0051a3';
        // }}
        // onMouseOut={(e) => {
        //   e.currentTarget.style.backgroundColor = '#0070f3';
        // }}
      >
        Return Home
      </a>
    </div>
  );
}