export default function LoginPage() {
  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      background: "#f7f2f9"
    }}>
      <div style={{
        width: "100%",
        maxWidth: "380px",
        padding: "40px",
        background: "#ffffff",
        borderRadius: "16px",
        boxShadow: "0 4px 20px rgba(0,0,0,0.08)"
      }}>

        <h2 style={{
          textAlign: "center",
          fontSize: "28px",
          fontWeight: "700",
          marginBottom: "20px",
          color: "#b05bb3"
        }}>
          BonitaDerme Login
        </h2>

        <form style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <input
            type="email"
            placeholder="E-mail"
            style={{
              padding: "14px",
              borderRadius: "10px",
              border: "1px solid #ddd",
              fontSize: "16px"
            }}
          />

          <input
            type="password"
            placeholder="Senha"
            style={{
              padding: "14px",
              borderRadius: "10px",
              border: "1px solid #ddd",
              fontSize: "16px"
            }}
          />

          <button style={{
            padding: "14px",
            background: "#c575d4",
            color: "#fff",
            borderRadius: "12px",
            border: "none",
            fontSize: "18px",
            fontWeight: "600",
            cursor: "pointer"
          }}>
            Entrar
          </button>
        </form>

      </div>
    </div>
  );
}
