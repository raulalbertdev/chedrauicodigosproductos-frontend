const shareActivityApp = async (statusActivity)  => {
    await fetch("https://api.chedrauicodigosean.raulalbert.dev/registerActivityApp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        key: "R4u1*_$Alb3rt||p08!X/;N3t0Che134Ef:C1]}WHgeRKC7HFpQ",
        status: statusActivity
      })
    });
  }

  