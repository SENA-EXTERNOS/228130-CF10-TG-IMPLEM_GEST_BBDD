<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Pruebas de servicios de red

    p Es importante el desarrollo de pruebas a cada uno de los servicios de red, ya que estas darán la seguridad para el óptimo funcionamiento de la red, es por esto que, es necesario mirar cada una de las pruebas en los servicios (DNS, DNSSEC, DDNS, SMTP, POP3, POP3S), estos son de gran importancia en la utilización de la internet, ya que garantizan la eficiencia de los recursos en una red.

    ImagenInfografica.color-primario.mb-5
      template(v-slot:imagen)
        figure
          img(
            src='@/assets/template/tema01/t1-i1.png',
            alt='Texto que describa la imagen'
          )

      .tarjeta.color-acento-beige.p-4(x='7%', y='80%', numero='')
        p Traduce a sistemas de nombres de dominio; este es un sistema que se encarga de traducir nombres de URL a números de IP, garantizando recordar mejor las direcciones URL.

      .tarjeta.color-acento-beige.p-4(x='24%', y='80%', numero='')
        p Añade una capa de seguridad adicional al protocolo DNS que permite comprobar la integridad y autenticidad de los datos.

      .tarjeta.color-acento-beige.p-4(x='41%', y='80%', numero='')
        p Dinámico es un servicio que permite la actualización en tiempo real de la información sobre nombres de dominio situada en un servidor de nombres.

      .tarjeta.color-acento-beige.p-4(x='58.5%', y='80%', numero='')
        p El protocolo para transferencia simple de correo es un protocolo de red utilizado para el intercambio de mensajes de correo electrónico entre computadoras u otros dispositivos.

      .tarjeta.color-acento-beige.p-4(x='75.5%', y='80%', numero='')
        p Utiliza la sincronización de correo en una dirección, este permite a los clientes poder descargar e-mails desde el servidor hacia el cliente; este es un protocolo de oficina de correo, permite gestionar los correos en un servidor remoto.

      .tarjeta.color-acento-beige.p-4(x='92.5%', y='80%', numero='')
        p Es el protocolo POP3 cifrado utilizando SSL.

    p.mb-5 Es fundamental la selección de los mejores DNS y depende de los siguientes factores, como lo son: operador de comunicaciones, ubicación geográfica, entre otros.
    .row.mb-5
      .col-lg-1.col-2
        figure(data-aos='zoom-in')
          img(src='@/assets/template/tema01/t1-i2.png')
      .col-lg-11.col-10
        p Ahora bien, tener en cuenta que un DNS es un protocolo importante del internet utilizado por ordenadores, servicios o cualquier recurso de red, y tiene varios usos, pero el principal es el de resolver las direcciones IP de los sitios web o servicios que utilizamos, para esto asignamos direcciones IP. Pongamos un ejemplo: la dirección web de Google es 216.58.210.163, más sin embargo las personas llegan a esta dirección por su nombre&nbsp;
          strong www.google.com&nbsp;
          | y no por su dirección IP. (Philippe,2010).

    TabsB.color-acento-contenido.mb-5
      .py-4.py-md-5(
        titulo='Ventajas de seleccionar los mejores DNS',
        :icono='require("@/assets/template/tema01/t1-i3.png")'
      )
        .row
          .col-md-6.mb-4.mb-md-0
            p Los DNS los suministra la empresa que provee servicios de internet, pero también existen otros DNS alternativos de manera global y que en su mayoría funcionan de manera más eficiente, suelen tener ventajas como:
            br
            ul
              li 
                i.fas.fa-check.color-icon-check
                |
                | Fiabilidad.
              br
              li 
                i.fas.fa-check.color-icon-check
                |
                | Mejor seguridad.
              br
              li 
                i.fas.fa-check.color-icon-check
                |
                | Sin censura.
              br
              li 
                i.fas.fa-check.color-icon-check
                |
                | Acceso a contenido geo bloqueado.
              br
              li 
                i.fas.fa-check.color-icon-check
                |
                | Actualización de bases de datos DNS.
              br
              li 
                i.fas.fa-check.color-icon-check
                |
                | Mejor velocidad.

          .col-md-6
            figure
              img(
                src='@/assets/template/tema01/t1-i5.png',
                alt='Texto que describa la imagen'
              )
      .py-4.py-md-5(
        titulo='Pruebas del DNS',
        :icono='require("@/assets/template/tema01/t1-i4.png")'
      )
        .row
          .col-md-8
            p Cuando se hace un cambio en el DNS en un dominio, suele tardar unas 48 horas hasta que este se actualice a nivel mundial, por ello en algunos casos el dominio sigue sin resolver los cambios, también puede influir las caches en tarjetas de red, los navegadores o&nbsp;
              i routers.
            |
            | Es por eso, que, para salir de dudas se puede utilizar la herramienta&nbsp;
            i “nslookup”&nbsp;
            | para probar el funcionamiento del servicio DNS en un dominio.
            .row.mt-5.p-4.card-t1.align-items-center.mb-5
              .col-lg-2.col-2
                figure
                  img(
                    src='@/assets/template/tema01/t1-i20.svg',
                    alt='Texto que describa la imagen'
                  )
              .col-lg-7.col-6
                h4.text-white Prueba DNS
                p.mb-0.text-white De clic en el botón descargar para visualizar un ejemplo de prueba DNS.
              .col-lg-3.col-4
                a.boton.boton--b.color-acento-contenido(
                  :href='obtenerLink("/actividades/actividad.html")',
                  target='_blank'
                )
                  span Descargar
                  i.fas.fa-file-download
          .col-md-4.mb-4.mb-md-0
            figure
              img(
                src='@/assets/template/tema01/t1-i6.png',
                alt='Texto que describa la imagen'
              )

    p Para conocer más sobre el protocolo DNS y como hacer pruebas sobre Windows revise el siguiente video.

    .col-lg-12.mb-5
      figure
        .video
          iframe(
            width='560',
            height='315',
            src='https://www.youtube.com/embed/fQjFfH7hNYU',
            title='Pruebas DNS',
            frameborder='0',
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture',
            allowfullscreen
          )

    .row.d-flex.justify-content-center.mb-2
      .col-11.mb-5
        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style='{ "background-image": `url(${require("@/assets/template/tema01/t1-i7.jpg")})` }'
          )(
            data-aos='zoom-in'
          )
          .bloque-texto-g__texto.p-4
            h2 DNSSEC
            br
            br
            p Para poder entender qué es un DNSSC, es importante saber qué es un DNS que se define como nombre de dominio, el cual se encarga de traducir nombres de la URL de un sitio web que se visita en números o direcciones IP, la computadora procesa mejor la información por números, por lo tanto, el DNS traduce esa URL.

    p Se presenta a continuación información sobre el DNSSEC, que pasa si no se implementa, su habilitación en las páginas web.

    .tarjeta.tarjeta--acento-botones.p-4.mb-5
      SlyderA(tipo='b')
        .row
          .col-md-6.mb-4.mb-md-0
            h2 ¿Qué es un DNSSEC?
            p Básicamente son extensiones a la seguridad del DNS; si se tiene un sitio web se puede estar seguro y mantener a los usuarios protegidos implementando el servicio DNSSEC, este es la clave de seguridad para la protección de su sitio web. (Philippe, 2010).

          .col-md-6
            figure
              img(
                src='@/assets/template/tema01/t1-i8.jpg',
                alt='Texto que describa la imagen'
              )

        .row
          .col-md-6.mb-4.mb-md-0
            h2 ¿Si no se implementa un DNSSEC qué pasaría?
            p Se presenta el siguiente ejemplo, se decide ingresar a una página de compra y no se verifica que el sitio web este duplicado, por ende, se terminará comprando un artículo en un sitio no oficial, y los datos y tarjeta de crédito posiblemente sean entregados a un&nbsp;
              i hacker.
            |
            | Un sitio con DNSSEC este problema no ocurre, ya que este valida las consultas realizadas en el ordenador para asegurar de no llegar a un sitio malicioso; una vez realizada la consulta este devolverá una respuesta válida o firmada por DNSSEC, esta respuesta permite saber si la dirección IP es auténtica.
            br
            br
            | Si se quiere probar un DNSSEC de cualquier URL se puede ir al siguiente sitio web:
            br
            br
            a.anexo.mb-4.mb-lg-0(
              href='https://dnssec-analyzer.verisignlabs.com/',
              target='_blank'
            )
              .anexo__icono
                img(src='@/assets/template/icono-link.svg')
              .anexo__texto
                p Enlace web. https://dnssec-analyzer.verisignlabs.com/

          .col-md-6
            figure
              img(
                src='@/assets/template/tema01/t1-i9.jpg',
                alt='Texto que describa la imagen'
              )
        .row
          .col-md-6.mb-4.mb-md-0
            h2 ¿Todas las páginas web tienen habilitado el protocolo DNSSEC?
            p Hay varias herramientas&nbsp;
              i online&nbsp;
              | que permiten saber si un sitio utiliza el protocolo DNSSEC, esta es una medida de seguridad interesante.
            |
            | En definitiva, DNSSEC es un protocolo que complementa al DNS para agregar una capa extra de seguridad, es interesante que las páginas lo tengan y de qué manera se pueden validar.

          .col-md-6
            figure
              img(
                src='@/assets/template/tema01/t1-i10.jpg',
                alt='Texto que describa la imagen'
              )

    h3.mb-5
      i.fas.fa-square.cac.me-3
      i DynDNS o&nbsp;
      | DDNS

    .row.mb-4
      .col-md-6
        figure(data-aos='zoom-in')
          img(src='@/assets/template/tema01/t1-i11.jpg') 
      .col-md-6
        p Es conocido como&nbsp;
          i Dynamic Domain Name System,&nbsp;
          | este funciona de ayuda para el envió de las direcciones IP, estas cambian constantemente a un nombre de dominio fijo, para ello es necesario registrarse en un servicio DDNS con un nombre que esté disponible, gracias a ese servicio su ordenador siempre estará disponible aun cuando no conozca su dirección IP.
        p El&nbsp;
          i router&nbsp;
          | informa al servicio DDNS la dirección IP que le ha sido asignada por el proveedor de internet y este le relaciona el nombre definido en el DDNS, si por algún motivo la dirección cambia, el servicio DDNS obtiene una nueva dirección de forma automática, y responde a la petición DNS. (Philippe, 2010)
        p 
        i DynDNS service&nbsp;
        | es uno de los más populares, el único requisito es crear una cuenta gratuita; este ofrece una versión sin ningún costo y otra paga, la primera permite crear tres dominios dinámicos gratis.

    .row.mb-5
      .col-md-8
        p 
        strong No-IP&nbsp;
        | es otro servicio DynDNS ofrecida por una compañía de Estados Unidos que cuenta con un paquete sin costo que permite crear tres nombres de dominio, el único inconveniente es que este servicio obligara a verificar la cuenta cada 30 días.
        p 
        strong
          i Duck&nbsp;
          | DNS&nbsp;
        | este servicio DDNS permite cuidar mucho la privacidad, es capaz de guardar de forma segura todas las bases de datos DNS y es compatible con cualquier sistema operativo, además es compatible con cualquier&nbsp;
        i router&nbsp;
        | que cuente con la opción de DynDNS.
        p 
        strong
          | DNS&nbsp;
          i Exit&nbsp;
        | ofrece múltiples funciones, permite tener la IP asociada a uno de los dominios gratuitos que tiene y, de esta manera, podrá registrar su dominio gratis para vincular la IP, tendrá un DNS dinámico, (Philippe,2010).
      .col-md-4
        figure(data-aos='zoom-in')
          img(src='@/assets/template/tema01/t1-i12.jpg')

    .row.d-flex.justify-content-center.mb-2
      .col-11.mb-5
        .bloque-texto-g.color-tercero.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style='{ "background-image": `url(${require("@/assets/template/tema01/t1-i13.jpg")})` }'
          )(
            data-aos='zoom-in'
          )
          .bloque-texto-g__texto.p-4
            h2 ¿Como configurar un servicio DynDNS?
            br
            br
            p Se presenta un ejemplo para implementar y configurar un servicio DynDNS, con un paso a paso para poder acceder a partir de un nombre de dominio al ordenador de nuestra casa, se va a usar el servicio DynDNS Service.
            br
            br
            ul
              li 
                i.fas.fa-check.color-icon-check
                |
                | Ir la a web oficial del servicio.
              br
              li 
                i.fas.fa-check.color-icon-check
                |
                | Crear una cuenta, registrando datos personales como lo son nombres, apellidos, dirección email, usuario y contraseña.
              br
              li 
                i.fas.fa-check.color-icon-check
                |
                | Se debe marcar la opción de aceptar términos de uso y se da clic en&nbsp;
                i Create Free Account.
              br
              li 
                i.fas.fa-check.color-icon-check
                |
                | Se recibe un correo para hacer la activación de la cuenta.
              br
              li 
                i.fas.fa-check.color-icon-check
                |
                | Luego se pulsa en&nbsp;
                i Creating a new DynDNS&nbsp;
                | url.
              br
              li 
                i.fas.fa-check.color-icon-check
                |
                | Se escribe el nombre de dominio y se elige el puerto por defecto 80.
              br
              li 
                i.fas.fa-check.color-icon-check
                |
                | Luego se da clic en la opción&nbsp;
                i Creating.

    p.mb-5 Protocolo SMTP, mejor llamado protocolo simple de transferencia de correo, es un protocolo TCP/IP que se utiliza para enviar y recibir correos electrónicos, este normalmente se utiliza con POP3.

    AcordionA.mb-5(
      tipo='b',
      clase-tarjeta='tarjeta tarjeta--azul color-activo'
    )
      .row(titulo='El protocolo de transferencia de correo simple (SMTP)')
        .col-md-8.mb-4.mb-md-0
          p Este se encarga básicamente de entregar el mensaje, en cuanto se reciben son enviados al servidor de correo de destino, el correo se enruta en base al servidor de destino, no a las direcciones de los usuarios individuales.

        .col-md-4
          figure
            img(
              src='@/assets/template/tema01/t1-i14.png',
              alt='Texto que describa la imagen'
            )

      .row(titulo='¿Qué es un puerto SMTP? ')
        .col-md-8.mb-4.mb-md-0
          p Un puerto es una forma de ayudar a los ordenadores a comunicarse entre sí, así como una dirección IP identifica a una computadora, un puerto identifica una aplicación o servicio específico. Se puede explicar de otra manera, una dirección IP es la dirección física de un centro comercial, un puerto es el número de cada uno de los negocios del centro comercial, si se quiere entregar algo a ese negocio no solamente lo dirige a la dirección del centro comercial, sino que también se necesita el número del local para que pueda llegar ese paquete, (Sánchez et al, 2020).
        .col-md-4
          figure
            img(
              src='@/assets/template/tema01/t1-i15.png',
              alt='Texto que describa la imagen'
            )
      .row(titulo='¿Qué puertos utiliza el SMTP?')
        .col-md-8.mb-4.mb-md-0
          p En realidad, existen cuatro puertos que se utilizan comúnmente en el protocolo SMTP que son: 25, 587, 465, 2525; a continuación, se explicaran cada uno de los puertos: el puerto 25 se utiliza para la retransmisión SMTP, este es usado generalmente para enviar spam; el puerto 587 es el puerto por defecto en el SMTP moderno.
          | El puerto 465 fue registrado para SMTPS, luego fue reasignado para un uso diferente y desaprobado, ahora bien, el puerto 2525 no es un puerto oficial, sin embargo, se usa popularmente como alternativa al puerto 587; la mayoría de proveedores de servicios de internet y alojamiento en la nube admiten este puerto; si el puerto 587 está bloqueado, el puerto 2525 es una buena alternativa.
        .col-md-4
          figure
            img(
              src='@/assets/template/tema01/t1-i16.png',
              alt='Texto que describa la imagen'
            )
      .row(titulo='Protocolo POP 3 o <em>Post Office Protocol 3</em>')
        .col-md-8.mb-4.mb-md-0
          p Se encarga de establecer conexión entre un cliente y servidor de correo electrónico para gestionar el envío de mensajes, se puede utilizar para los clientes pesados genéricos, los dispositivos móviles no sincronizados vía&nbsp;
            i ActiveSync y Outlook,&nbsp;
            | permite a los usuarios recuperar sus mensajes desde su buzón de mensajes, no ofrece ninguna funcionalidad de trabajo en equipo; este protocolo es fácil de implementar y la conexión a un servidor POP3 funciona de manera sencilla, los mensajes se pueden enviar de dos formas, una es dejando una copia en el servidor y la otra moviendo el correo hacia el cliente, (Sánchez et al, 2020).
        .col-md-4
          figure
            img(
              src='@/assets/template/tema01/t1-i17.png',
              alt='Texto que describa la imagen'
            )
      .row(titulo='¿Como funciona el protocolo SMTP?')
        .col-md-8.mb-4.mb-md-0
          .row 
            .col-lg-12
              p Para resolver la pregunta se revisará el siguiente ejercicio:
            .col-lg-6
              ul
                li 
                  i.fas.fa-check.color-icon-check
                  |
                  | Servidor: 220 Servidor SMTP
                li 
                  i.fas.fa-check.color-icon-check
                  |
                  | Cliente: HELO miequipo.midominio.com
                li 
                  i.fas.fa-check.color-icon-check
                  |
                  | Servidor: 250&nbsp;
                  i Hello, please to meet you
                li 
                  i.fas.fa-check.color-icon-check
                  |
                  | Cliente:&nbsp;
                  i MAIL FROM:&nbsp;
                  | &lt;yo@midominio.com&gt;
                li 
                  i.fas.fa-check.color-icon-check
                  |
                  | Servidor: 250 Ok
                li 
                  i.fas.fa-check.color-icon-check
                  |
                  | Cliente: RCPT TO: &lt;destinatario@sudominio.com&gt;
                li 
                  i.fas.fa-check.color-icon-check
                  |
                  | Servidor: 250 Ok
                li 
                  i.fas.fa-check.color-icon-check
                  |
                  | Cliente:&nbsp;
                  i DATA
                li 
                  i.fas.fa-check.color-icon-check
                  |
                  | Servidor: 354&nbsp;
                  i End data with&nbsp;
                  | &lt;CR&gt;&lt;LF&gt;.&lt;CR&gt;&lt;LF&gt;

                li 
                  i.fas.fa-check.color-icon-check
                  |
                  | Cliente:&nbsp;
                  i Subject:&nbsp;
                  | Campo de asunto
            .col-lg-6
              ul
                li 
                  i.fas.fa-check.color-icon-check
                  |
                  | Cliente: From: yo@midominio.com
                li 
                  i.fas.fa-check.color-icon-check
                  |
                  | Cliente:&nbsp;
                  i To:&nbsp;
                  | destinatario@sudominio.com
                li 
                  i.fas.fa-check.color-icon-check
                  |
                  | Cliente:
                li 
                  i.fas.fa-check.color-icon-check
                  |
                  | Cliente: Hola
                li 
                  i.fas.fa-check.color-icon-check
                  |
                  | Cliente: Esto es una prueba
                li 
                  i.fas.fa-check.color-icon-check
                  |
                  | Cliente: Hasta luego
                li 
                  i.fas.fa-check.color-icon-check
                  |
                  | Cliente:
                li 
                  i.fas.fa-check.color-icon-check
                  |
                  | Cliente: .
                li 
                  i.fas.fa-check.color-icon-check
                  |
                  | Cliente: &lt;CR&gt;&lt;LF&gt;.&lt;CR&gt;&lt;LF&gt;
                li 
                  i.fas.fa-check.color-icon-check
                  |
                  | Servidor: 250 Ok:&nbsp;
                  i queued as&nbsp;
                  | 12345
                li 
                  i.fas.fa-check.color-icon-check
                  |
                  | Cliente:&nbsp;
                  i quit
        .col-md-4
          figure
            img(
              src='@/assets/template/tema01/t1-i18.png',
              alt='Texto que describa la imagen'
            )

    h3.mb-5
      i.fas.fa-square.cac.me-3
      i Protocolo POP3S

    p Protocolo de oficina de correo, este se utiliza para obtener mensajes de correo electrónico en clientes locales.
    br
    p.mb-5 Para configurar e implementar cuentas con el protocolo POP3 en Outlook debemos hacer los siguientes pasos:

    .row.justify-content-center.mb-5
      .col-8.col-lg-4
        figure
          img(src='@/assets/template/tema01/t1-i19.png', alt='alt')
      .col-lg-8
        LineaTiempoD.color-acento-botones
          p(numero='1', titulo='Outlook') Tener instalado en el sistema operativo la aplicación de Outlook.

          p(numero='2', titulo='Seleccionar pestaña archivo') Abrir la aplicación de correo Outlook y seleccionar la pestaña archivo en la barra de herramientas.

          p(numero='3', titulo='Agregar cuentas') Encima del botón configuración, hacer clic en agregar cuentas.

          p(numero='4', titulo='Configurar manualmente') Seleccionar la opción configurar manualmente las opciones del servidor o tipos de servidores adicionales y se pulsa siguiente.

          p(numero='5', titulo='Seleccionar correo electrónico') En la página elegir servicio, seleccionar el correo electrónico de internet y pulsar siguiente

          p(numero='6', titulo='Configuración de correo') En la página de configuración de correo electrónico de internet completar la siguiente información:
            br
            br
            ul
              li 
                i.fas.fa-circle.color-icon-circle
                |
                | Nombre: escribir el nombre de preferencia el cual se verá cada vez que se envíe un correo electrónico desde esa cuenta.
              li 
                i.fas.fa-circle.color-icon-circle
                |
                | Dirección de correo electrónico: escribir una cuenta de correo electrónico que se encuentre disponible para su uso.
              li 
                i.fas.fa-circle.color-icon-circle
                |
                | Tipo de cuenta: seleccionamos protocolo POP3
              li 
                i.fas.fa-circle.color-icon-circle
                |
                | Servidor de correo de inicio: aquí colocar el protocolo POP.
              li 
                i.fas.fa-circle.color-icon-circle
                |
                | Servidor de correo saliente: escribir el nombre del servidor SMTP.

          p(numero='7', titulo='Nombre de usuario') Añadir un usuario a la cuenta de correo electrónico.

          p(numero='8', titulo='Contraseña') Introducir la contraseña establecida de la cuenta de correo electrónico.

          p(numero='9', titulo='Más configuraciones – Mi servidor de salida') Una vez configurada la cuenta pulsar en más configuraciones y seleccionar Mi servidor de salida (SMTP) requiere autenticar y utilizar la misma configuración que mi servidor de correo de entrada y seleccionar aceptar.

          p(numero='10', titulo='Finalizar') Por último, pulsar aceptar y finalizar.
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
