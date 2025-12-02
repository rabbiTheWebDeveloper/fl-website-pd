export default function Loading() {
  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f9fafb",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          border: "4px solid #e5e7eb",
          borderTop: "4px solid #7b43b5",
          borderRadius: "50%",
          width: "40px",
          height: "40px",
          animation: "spin 1s linear infinite",
        }}
      ></div>
      <p
        style={{
          marginTop: "12px",
          color: "#7b43b5",
          fontSize: "16px",
          fontWeight: "bold",
        }}
      >
        Loading...
      </p>

      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
    </div>
  );
}
