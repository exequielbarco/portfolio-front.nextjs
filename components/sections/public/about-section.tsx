import Image from "next/image";
import AboutActions from "./about-actions";

const AboutSection = () => {
  return (
    <section className="max-w-4xl mx-auto px-4 leading-relaxed">
      <h1 className="text-3xl font-bold mb-1">Acerca de mí</h1>
      <p className="text-lg italic mb-6">Web Developer · Cloud · DevOps</p>

      {/* Imagen: centrada en mobile, flotando a la derecha en desktop */}
      <Image
        src="https://media.licdn.com/dms/image/v2/D4D03AQE9YpcNv27WZQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1723634188497?e=1766016000&v=beta&t=bVlDwEuypR2o3MOZ1qe_2aTRRPYY7khG3VSawVYjCko"
        alt="Foto de perfil"
        width={180}
        height={180}
        className="
          rounded-full object-cover
          mx-auto mb-4            /* mobile: centrada arriba */
          md:float-right         /* desktop: flota a la derecha */
          md:ml-6 md:mb-3        /* margen solo en desktop */
        "
      />

      <p>
        Soy un desarrollador argentino con experiencia en desarrollo full-stack,
        infraestructura, computación en la nube y DevOps. Me recibí como Técnico
        en Desarrollo de Software en la provincia de Santiago del Estero,
        Argentina.
      </p>

      <p className="mt-4 font-semibold">
        Resumen de habilidades técnicas que mejor representan mi perfil
        profesional:
      </p>

      <ul className="list-disc ml-6 space-y-2 mt-2">
        <li>
          <strong>Programación & Desarrollo:</strong> JavaScript, TypeScript,
          React, Next.js, Django, .NET, Node.js, integración de APIs, diseño de
          arquitectura y construcción de interfaces modernas.
        </li>
        <li>
          <strong>Infraestructura & DevOps:</strong> Docker, Docker Compose,
          Kubernetes, Traefik, Nginx, GitHub Actions, pipelines CI/CD,
          despliegues automatizados y monitoreo de servicios.
        </li>
        <li>
          <strong>Bases de Datos & Almacenamiento:</strong> PostgreSQL, Redis,
          diseño de esquemas, optimización de consultas, performance y manejo
          eficiente de datos.
        </li>
        <li>
          <strong>Cloud & Orquestación:</strong> despliegues escalables,
          automatización de entornos, alta disponibilidad, balanceo de carga e
          infraestructura preparada para producción.
        </li>
      </ul>

      <AboutActions />
    </section>
  );
};

export default AboutSection;
