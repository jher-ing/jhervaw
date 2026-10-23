import type { Metadata } from "next";
import { Section, Eyebrow } from "@/components/ui/Section";
import { pageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = pageMetadata({
  title: "Política de privacidad",
  description:
    "Cómo Jherva trata los datos personales de quienes nos contactan, de nuestros clientes y de los datos de Google que usamos, según la Ley 1581 de 2012.",
  path: "/privacidad",
});

// Mismos datos del responsable que usan Jherva Pedidos, Catálogos y Cotizaciones.
const LEGAL = {
  responsable: "Rafael Enrique Hernández Jiménez",
  ciudad: "Bogotá D.C., Colombia",
  correo: "rahernandez.ing@gmail.com",
  vigenteDesde: "20 de octubre de 2026",
};

function H2({ children }: { children: React.ReactNode }) {
  return <h2 className="mt-10 text-xl font-semibold text-text-primary">{children}</h2>;
}

function P({ children }: { children: React.ReactNode }) {
  return <p className="mt-3 leading-relaxed text-text-secondary">{children}</p>;
}

function Lista({ items }: { items: React.ReactNode[] }) {
  return (
    <ul className="mt-3 list-disc space-y-2 pl-5 leading-relaxed text-text-secondary">
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  );
}

export default function PrivacidadPage() {
  const correo = (
    <a href={`mailto:${LEGAL.correo}`} className="font-medium text-primary underline-offset-4 hover:underline">
      {LEGAL.correo}
    </a>
  );

  return (
    <Section>
      <article className="mx-auto max-w-2xl">
        <Eyebrow>Legal</Eyebrow>
        <h1 className="mt-4 text-3xl font-semibold text-balance sm:text-4xl">Política de tratamiento de datos personales</h1>
        <p className="mt-3 text-sm text-text-muted">Vigente desde el {LEGAL.vigenteDesde}</p>

        <P>
          Esta política explica cómo {siteConfig.name} recoge, usa y protege los datos personales en {siteConfig.url} y
          en su atención comercial, en cumplimiento de la Ley 1581 de 2012, el Decreto 1377 de 2013 (incorporado en el
          Decreto 1074 de 2015) y demás normas colombianas sobre protección de datos. Las aplicaciones Jherva Pedidos,
          Jherva Catálogos y Jherva Cotizaciones tienen su propia política, publicada en cada aplicación.
        </P>

        <H2>1. Responsable del tratamiento</H2>
        <Lista
          items={[
            <>
              <strong className="text-text-primary">{LEGAL.responsable}</strong>, persona natural que opera bajo la
              marca {siteConfig.name}.
            </>,
            <>Domicilio: {LEGAL.ciudad}.</>,
            <>Correo para asuntos de datos personales: {correo}.</>,
            <>WhatsApp: {siteConfig.phone.display}.</>,
          ]}
        />

        <H2>2. Qué datos tratamos</H2>
        <P>
          <strong className="text-text-primary">Cuando nos escribe.</strong> El formulario de contacto pide su nombre, su
          correo y su mensaje. Esos datos no se guardan en nuestros servidores: con ellos se arma un mensaje que se abre
          en WhatsApp para que usted lo envíe. Si nos escribe por WhatsApp, por correo o nos llama, tratamos los datos
          que usted comparta en esa conversación.
        </P>
        <P>
          <strong className="text-text-primary">Clientes y negocios con los que hablamos.</strong> Para atender y
          hacer seguimiento comercial registramos en nuestro sistema de gestión de clientes el nombre del negocio, el
          nombre y cargo de la persona de contacto, su teléfono o WhatsApp, su correo, su ciudad y las notas de cada
          conversación. Cuando contactamos a un negocio por primera vez, usamos los datos de contacto que ese negocio
          publica en directorios como Google Maps. Si no quiere recibir mensajes nuestros, díganos y no volveremos a
          escribirle.
        </P>
        <P>
          <strong className="text-text-primary">Estadísticas de visitas.</strong> Para saber cuántas personas visitan
          el sitio y qué páginas leen, usamos Vercel Web Analytics. No usa cookies ni guarda datos que identifiquen a
          la persona: registra la página visitada, el sitio de donde llegó, el país y el tipo de dispositivo y
          navegador, y solo se consulta en forma de totales.
        </P>
        <P>No recogemos datos sensibles ni datos de niños, niñas o adolescentes.</P>

        <H2>3. Datos de Google que usamos (aplicación Natt SEO)</H2>
        <P>
          {siteConfig.name} usa una aplicación interna, Natt SEO, que se conecta a Google con permisos de{" "}
          <strong className="text-text-primary">solo lectura</strong> a Google Search Console y Google Analytics. Solo
          la usa {siteConfig.name}, con su propia cuenta de Google, y solo para las propiedades que{" "}
          {siteConfig.name} administra (como jherva.com), con el fin de revisar cómo aparece el sitio en Google: qué
          búsquedas traen visitas, en qué posición aparece y qué páginas mejorar.
        </P>
        <Lista
          items={[
            "Los datos se consultan desde el computador de Jherva y se guardan solo ahí, en una memoria temporal; no se publican.",
            "No se venden, no se comparten con terceros, no se usan para publicidad y no se usan para entrenar modelos de inteligencia artificial generales.",
            "La aplicación no puede modificar nada en Search Console ni en Analytics.",
            <>
              El uso de la información recibida de las API de Google cumple la{" "}
              <a
                href="https://developers.google.com/terms/api-services-user-data-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-primary underline-offset-4 hover:underline"
              >
                Política de datos de usuario de los servicios de las API de Google
              </a>
              , incluidos los requisitos de uso limitado.
            </>,
            <>
              El acceso se puede revocar en cualquier momento desde{" "}
              <a
                href="https://myaccount.google.com/permissions"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-primary underline-offset-4 hover:underline"
              >
                los permisos de la cuenta de Google
              </a>
              .
            </>,
          ]}
        />

        <H2>4. Para qué usamos los datos</H2>
        <Lista
          items={[
            "Responder sus mensajes, preparar propuestas y cotizaciones, y prestar los servicios contratados.",
            "Hacer seguimiento comercial a los negocios que muestran interés en nuestros servicios.",
            "Facturar, cobrar y cumplir obligaciones legales y contables.",
            "Mejorar el sitio y su posicionamiento en buscadores.",
            "Informar sobre cambios en nuestros servicios o en esta política.",
          ]}
        />

        <H2>5. Derechos de los titulares</H2>
        <P>Como titular de los datos, usted tiene derecho a:</P>
        <Lista
          items={[
            "Conocer, actualizar y rectificar sus datos.",
            "Pedir prueba de la autorización que otorgó.",
            "Ser informado sobre el uso que se ha dado a sus datos.",
            "Revocar la autorización y pedir que se eliminen sus datos, cuando no exista un deber legal o contractual de conservarlos.",
            "Acceder gratuitamente a sus datos.",
            "Presentar quejas ante la Superintendencia de Industria y Comercio, después de haber agotado el trámite de consulta o reclamo ante nosotros.",
          ]}
        />

        <H2>6. Cómo ejercer sus derechos</H2>
        <P>
          Escriba a {correo} o al WhatsApp {siteConfig.phone.display} indicando su nombre, lo que solicita y un dato de
          contacto para responderle.
        </P>
        <Lista
          items={[
            <>
              <strong className="text-text-primary">Consultas:</strong> se responden en máximo diez (10) días hábiles. Si
              no es posible en ese plazo, le informaremos el motivo y la fecha de respuesta, que no superará cinco (5)
              días hábiles más.
            </>,
            <>
              <strong className="text-text-primary">Reclamos</strong> (corrección, actualización, supresión o
              incumplimiento): se responden en máximo quince (15) días hábiles, prorrogables por ocho (8) días hábiles
              más, informándole el motivo.
            </>,
          ]}
        />

        <H2>7. Proveedores y transferencia internacional</H2>
        <P>
          Para funcionar usamos proveedores que pueden almacenar o procesar datos en servidores fuera de Colombia,
          principalmente en Estados Unidos: Vercel (alojamiento del sitio y estadísticas de visitas), Supabase (sistema
          de gestión de clientes), Google (Search Console y correo) y WhatsApp de Meta (mensajería). Estos
          proveedores cuentan con medidas de seguridad acordes con estándares internacionales.
        </P>

        <H2>8. Seguridad</H2>
        <P>
          Aplicamos medidas técnicas para proteger los datos: conexiones cifradas (HTTPS), acceso restringido con
          usuario y contraseña a nuestro sistema de gestión de clientes, y claves de acceso guardadas solo en equipos
          de {siteConfig.name}.
        </P>

        <H2>9. Conservación</H2>
        <P>
          Conservamos los datos mientras exista una relación comercial o un interés de contacto, y durante el tiempo
          necesario para cumplir las finalidades descritas o las obligaciones legales. Si pide que eliminemos sus datos,
          lo haremos, salvo los que la ley obligue a conservar.
        </P>

        <H2>10. Cambios a esta política</H2>
        <P>
          Si cambiamos esta política de forma importante, lo publicaremos en esta página con la nueva fecha de
          vigencia.
        </P>
      </article>
    </Section>
  );
}
