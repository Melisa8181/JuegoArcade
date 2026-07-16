# 🎮 Brick Breaker Arcade

Un videojuego clásico estilo Arkanoid/Breakout interactivo desarrollado para la web, utilizando el motor de físicas y renderizado **Phaser.js**.

🔗 **[Ver Deploy en Vivo](https://melisa8181.github.io/JuegoArcade/)**

---

## 📝 Descripción

Este proyecto es un juego arcade clásico de destrucción de bloques. El jugador controla una plataforma móvil con el objetivo de hacer rebotar una pelota para destruir todas las filas de ladrillos de colores en pantalla sin dejar que caiga al vacío.

### Características del juego:
*   **Sistema de físicas 2D:** Rebotes realistas y cálculo de ángulo de impacto según el lugar de la plataforma donde pegue la bola.
*   **Controles intuitivos:** Movimiento fluido usando las flechas de dirección del teclado.
*   **Marcador en tiempo real:** Incremento de puntos dinámico al romper bloques y al salvar la bola.
*   **Pantallas de Estado:** Control de flujo de juego con pantallas de *Game Over* y *Congratulations* (Victoria).

---

## 🛠️ Tecnologías Utilizadas

*   **Phaser.js (v3)** – Motor de videojuegos en JavaScript de código abierto utilizado para el renderizado del canvas, gestión de escenas y físicas del juego (Arcade Physics).
*   **JavaScript (ES6 Modules)** – Arquitectura modular limpia dividiendo el código en escenas (`game.js`, `game-over.js`, `congratulations.js`) y componentes independientes (`Scoreboard.js`).
*   **HTML5 & CSS3** – Contenedor del canvas del juego y centrado de la interfaz en la pantalla.

---

## 📸 Capturas de Pantalla

| Partida Activa | Pantalla de Game Over |
| :---: | :---: |
| <img width="1920" height="919" alt="Image" src="https://github.com/user-attachments/assets/0e5e23be-73b0-4d1d-9a0a-03b3f5806e74" /> | <img width="1920" height="919" alt="Image" src="https://github.com/user-attachments/assets/716a3e0d-9882-4843-9266-b35f76d621a2" /> |

---

## 🎮 Controles de Juego

*   ⬅️ / ➡️ **Flechas Izquierda / Derecha:** Mover la plataforma.
*   ⬆️ **Flecha Arriba:** Lanzar la pelota para iniciar el juego.
*   🖱️ **Click en Restart:** Reiniciar la partida desde la pantalla de Game Over.

---

## ⚙️ Ejecución Local

1. Clona el repositorio:
   ```bash
   git clone [https://github.com/tu-usuario/nombre-del-repo.git](https://github.com/tu-usuario/nombre-del-repo.git)
2. Accedé a la carpeta:
     cd nombre-del-repo
4. Ejecutá el archivo index.html utilizando un servidor local (como Live Server en VS Code) para que cargue correctamente los módulos de JavaScript sin problemas de políticas CORS.
