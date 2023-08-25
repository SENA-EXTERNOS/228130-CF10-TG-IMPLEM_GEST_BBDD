<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Gestión de redundancia y alta disponibilidad

    .row.mb-5
      .col-lg-1.col-2
        figure(data-aos='zoom-in')
          img(src='@/assets/template/tema02/t2-i1.png')
      .col-lg-11.col-10
        p Se debe diferenciar entre redundancia y alta disponibilidad, esto es importante ya que, es conveniente para la organización y para elegir adecuadamente al proveedor donde se proporcione garantía de ambas.

    TabsA.color-acento-contenido.mb-5
      .tarjeta.color-adicional-2.p-4(titulo='¿Qué es la redundancia?')
        h4 Redundancia 
        p Es la capacidad de un sistema para poder repetir datos para así prever la posibilidad de fallos que puedan surgir debido al desgaste normal del uso, ya sea del #[em hardware] o #[em software]. Este se presenta como solución a los problemas de protección y confiabilidad, o sea, vale decir que, la redundancia es un #[em Backup] o un respaldo. 
          br
          br
          |El #[em Backup] es un sistema de gran importancia porque, permite hacer una copia de seguridad y conservarla en una ubicación distinta a donde se encuentra la original y, esto se hace, para evitar pérdidas de la información. Los servidores suelen tener más de un disco duro y acostumbran a estar conectados mediante un RAID. 
          br
          br
          |En la redundancia activa los enlaces están activos al tiempo y en la redundancia pasiva solo una parte está siempre en modo activo y la otra parte estará en modo de espera.

      .tarjeta.color-adicional-2.p-4(titulo='Tipos de redundancia')
        h4 Redundancia de #[em hardware]
        p Es la posibilidad de ofrecer seguridad de un fallo en el uso de un #[em Hardware], para esto es necesario utilizar interconexión de centros de datos para asegurar que cuando haya una falla se pueda conectar a otro #[em Data center.]
        h4 Redundancia geográfica
        p Este respaldo proporciona servicios de redundancia geográfica de modo que, en caso de una falla completa del centro de datos, la información sea desviada a otros servidores ubicados en otra parte del mundo; así que cuando ocurran desastres naturales que afecten a un área o región, habrá otro respaldo disponible en otra ubicación, listo para funcionar. (Abad, 2013)

      .tarjeta.color-adicional-2.p-4(titulo='¿Qué es la disponibilidad?')

        h4 Disponibilidad
        p Es la capacidad de un sistema o componente del sistema para estar operando durante un periodo largo, es decir que no tenga fallos, esta se mide de 0 % al 100 %, aunque es muy complicado lograr el 100 % de disponibilidad; el operador de conectividad en la nube si puede alcanzar lo que se conoce como disponibilidad de “cinco 9 s” es decir, alcanzar el 99.999 % de disponibilidad. Se debe identificar en el acuerdo de SLA a que estándar de 9 s se adhiere el proveedor de conectividad.
        p Ejemplo de disponibilidad con un SLA de 99.999 %, con este acuerdo el usuario final, puede esperar que el servicio no esté disponible dúrate los siguientes periodos de tiempo:
        br
        ul
          li 
            i.fas.fa-check.color-icon-check
            |
            | Diario: 0.9 segundos
          li 
            i.fas.fa-check.color-icon-check
            |
            | Semanal: 6.0 Segundos
          li 
            i.fas.fa-check.color-icon-check
            |
            | Mensual: 26.3 segundos
          li 
            i.fas.fa-check.color-icon-check
            |
            | Anual: 5 minutos y 15.6 segundos
        p Para que el sistema esté disponible, las partes de un sistema deben estar bien diseñadas y probadas antes de ser usadas, dado que un sistema informático tiene muchas partes y generalmente deben tener precedentes de su funcionamiento. Esto incluye tanto al proveedor de la nube como a la empresa, por ello se debe contar con equipos actualizados y darles un constante mantenimiento a las redes, sistemas y&nbsp;
          i software.

      .tarjeta.color-adicional-2.p-4(titulo='¿Qué comprenden?')
      
        h4 Redundancia y alta disponibilidad
        p “El concepto de redundancia junto al de alta disponibilidad, es la capacidad que tiene un sistema para detectar posibles fallos de la manera más eficiente, esta tendrá la posibilidad de recuperarse del problema, afectando lo menos posible al servicio. La redundancia hace referencia a nodos completos que están replicados o componentes de estos, así como caminos y que una de sus funciones es utilizarlos en caso de que el sistema falle, es por esto que, la alta disponibilidad nos brinda la capacidad del sistema para brindar un servicio en ejecución en un tiempo estimado o a la capacidad de recuperación del mismo en caso de caerse la red, cuando se habla de la “caída de la red” se puede decir que hay situaciones que impliquen que la red deje de funcionar, ya sea un cable cortado o desconectado. En casos como estos hace falta que el sistema detecte la falla y que reacción de manera rápida y eficiente la búsqueda de la solución”, (Montoya, M. et al, 2020).


      .tarjeta.color-adicional-2.p-4(titulo='La alta disponibilidad')
        h4 ¿Cómo funciona?
        p Este funciona en respuesta de una falla en la infraestructura, conceptualmente su funcionamiento es simple, este necesita de un 
          em software 
          | y múltiples configuraciones por expertos en el tema.
        p Se debe desarrollar configuraciones en sistemas que tienen procesos robustos, para así minimizar tiempos de inactividades; a menudo esta es una prioridad alta, ya que a pesar de que se tengan software y sistemas confiables se pueden tener problemas que puedan derribar la infraestructura tecnológica, es por esto, la importancia de la alta disponibilidad ya que debe permitir una estrategia fiable y así reducir los tiempos de fallos, los sistemas de alta disponibilidad pueden recuperarse de sus fallas en su infraestructura automáticamente. 
    .row.d-flex.justify-content-center.mb-5
      .col-lg-8
        .cajon.color-acento-contenido-2.p-4
          p.mb-0 A continuación, se abordarán los elementos de alta disponibilidad; hay una serie de combinaciones de #[em software] para realizar cada tarea en una configuración de alta disponibilidad y es por esto por lo que el #[em software] sirve como solo una posible solución. 

    p.mb-5 Se explica a continuación cada una de las piezas y componentes de la configuración de la alta disponibilidad.

    .tarjeta.tarjeta--acento-botones.p-4.mb-5
      SlyderA(tipo='b')
        .row
          .col-md-7.mb-4.mb-md-0
            h2 Sistema de archivos
            p En esta configuración, se debe utilizar un volumen replicado y distribuido para almacenar archivos y complementos; se puede pensar en el volumen como el sistema de archivos compartidos en los servidores. El volumen está compuesto por secciones, que son directorios de archivos compartidos en cualquier servidor.
              br
              br
              |Una opción excelente para construir un sistema altamente fiable y disponible es utilizar sistemas de archivos #[em GlusterFs], ya que este maneja la monitorización y la conmutación por errores de forma predeterminada, este sistema de archivos es multiescalable, permite agregar varios servidores de archivos sobre ethernet.

          .col-md-5
            figure
              img(
                src='@/assets/template/tema02/t2-i2.png',
                alt='Texto que describa la imagen'
              ) 
        .row
          .col-md-7.mb-4.mb-md-0
            h2 Bases de datos
            p Almacena contenido y datos del usuario, una opción muy eficiente es el uso DB #[em (Data Base)] como #[em Percona XtraDB]; hay que resaltar, cuando se usa un CMS como lo es WordPress, este guarda los datos que compone sus páginas.
              br
              br
              |Los nodos de las DB son un grupo de servidores XtraBD para la utilización de Galera de replicación; Galera ofrece replicación sincrónica, lo que garantiza que los datos se escriben en los nodos de la base de datos secundaria y, al mismo tiempo, se hace la replicación en la base de datos primaria; este método proporciona una óptima redundancia al clúster de la base de datos, porque evita periodos de tiempo en los que los nodos de la base de datos no se encuentran en estados coincidentes. Galera también brinda replicación multimaestro, lo que permite que cualquiera de los nodos puedan responder a las consultas de los clientes. (Abad A, 2018)

          .col-md-5
            figure
              img(
                src='@/assets/template/tema02/t2-i3.png',
                alt='Texto que describa la imagen'
              ) 

        .row
          .col-md-7.mb-4.mb-md-0
            h2 Servidor Web
            p Estos supervisan el contenido de los sitios web, en la mayoría de las configuraciones el servidor web leerá una base de datos para generar el contenido, y escribirá si se completa un formulario; en una aplicación dinámica la base de datos es importante para el cumplimiento de las solicitudes web, el servidor web amacena&nbsp;
              i software.
            p La comunicación con el servidor Apache con los nodos de las bases de datos funciona de manera similar, debido a que el clúster de las bases de datos tiene múltiples maestros, cualquiera de las bases de datos puede responder a las peticiones y consultas de Apache, ya que permite replicación sincrónica, cuando Apache escribe en una base de datos, las demás se actualizarán en tiempo real para atender solicitudes de cualquiera de los otros servidores Apache.

          .col-md-5
            figure
              img(
                src='@/assets/template/tema02/t2-i4.png',
                alt='Texto que describa la imagen'
              ) 
        .row
          .col-md-7.mb-4.mb-md-0
            h2 Conmutación por error
            p Es el proceso por el cual un nodo se hace cargo del trabajo y de otro en caso de que uno se deshabilite. Esto genera como resultado la supervisión de las fallas en el sistema. #[em GlusterFs] maneja y monitorea la conmutación por error, se necesita un servicio separado para el clúster de la base de datos, para esto se utiliza #[em keepalived] con una dirección IP de conmutación por error, esta es simplemente una dirección privada que se puede reasignar entre nodos cuando alguno falle.
              br
              br
              |Es fundamental hablar de herramientas de alta disponibilidad como lo es #[em keepalived] donde utiliza protocolos de redundancia de enrutador virtual, que asigna automáticamente la dirección IP de conmutación por error. (Sinisterra, M. 2012)
              br
              br
              |Este servicio utiliza reglas definidas por el usuario para monitorear un cierto número de fallas por parte de un nodo de la base de datos. Cuando se alcanza el límite de fallas, #[em keepalived] asigna IP de conmutación por error a un nodo diferente para que no se interrumpa el cumplimiento de las solicitudes.

          .col-md-5
            figure
              img(
                src='@/assets/template/tema02/t2-i5.png',
                alt='Texto que describa la imagen'
              ) 
        .row
          .col-md-7.mb-4.mb-md-0
            h2 Balanceo de cargas
            p Uno de los componentes más importantes es el de equilibrio de carga en un sistema de alta disponibilidad, ya que actúa como la primera barrera para el manejo del tráfico de los usuarios a los servidores de aplicaciones, esto asegurando que no exista un servidor con cargas más pesadas que los demás.
            P Un componente para esto es&nbsp;
              i NodeBalancer,&nbsp;
              | que permite la distribución equilibrada del tráfico de datos entrantes a los servidores de aplicaciones, garantizando que ninguno tenga más carga o haya servidores sin carga.&nbsp;
              i NodeBalancer&nbsp;
              | ofrece un monitoreo de&nbsp;
              i Back-end.

          .col-md-5
            figure
              img(
                src='@/assets/template/tema02/t2-i6.png',
                alt='Texto que describa la imagen'
              ) 

    p.mb-5 Se presentan a continuación algunos interrogantes a tener en cuenta con relación a la configuración de la alta disponibilidad.

    .row.justify-content-center.mb-4
      .col-lg-8
        AcordionA.mb-5(tipo='a', clase-tarjeta='tarjeta acordeonA')
          .row(titulo='¿Qué hace que un sistema sea altamente disponible?')
            .col-12
              p El objetivo primario de la alta disponibilidad es eliminar los puntos únicos de fallo en la infraestructura, un punto de fallo es un componente de la pila tecnológica que causaría una interrupción del servicio sino estuviera disponible, cualquier componente que es un requisito para el óptimo funcionamiento de la aplicación que no tiene la redundancia es considerado como un único punto de fallo.
                br
                br
                |Para eliminar estos puntos de fallo, cada capa debe estar preparada para la redundancia, vamos a colocar un ejemplo para entender a fondo este concepto: hay una infraestructura que tiene dos servidores #[em web] y redundantes detrás de un equilibrador de carga, el tráfico proveniente de los clientes se distribuirá por igual entre los servidores, pero si uno de estos llegara a tener un fallo el equilibrador de carga redirigirá todo el tráfico al servidor que esté operativo. (Abad. A., 2018)

          .row(
            titulo='¿Qué pasaría si el equilibrador de carga se desconecta?'
          )
            .col-12
              p Se puede decir que la capa de equilibrio de carga en si misma sigue siendo un punto único de fallo, pero sin embargo se puede configurar un equilibrador de carga adicional para lograr la redundancia.
                br
                br
                |La redundancia no puede garantizar una alta disponibilidad, para esto se debe usar una herramienta o proceso que detecte fallas y así poder tomar medidas de contingencias, la detección de sistemas redundantes puede utilizar un direccionamiento de arriba-abajo, es decir, la capa superior hace el proceso de monitorear la capa inferior y así poder garantizar la detección de fallos; hay casos donde la capa superior no existe, como lo es la capa de balanceador de carga, por esta razón crear un servicio que detecte las fallas en un equilibrador de carga generaría un nuevo punto único de fallo.
                br
                br
                |Es por esto, que es necesario un enfoque distribuido donde se deban interconectar varios nodos de manera redundante como un clúster, donde cada nodo debe ser capaz de recuperarse de fallos y detectarlos de manera eficiente; ahora, para el caso de un equilibrador de carga, existe una complicación porque, como funcionan los servidores de nombre, la recuperación de un fallo, normalmente significa una conmutación por error y es por esto que se debe realizar un cambio en el DNS, para encaminar a una dirección IP del equilibrador de carga redundante. Un cambio de tipo DNS puede llevar mucho tiempo en propagarse por Internet, lo que causaría un tiempo de inactividad; para esto es posible utilizar el equilibrio de carga de round-robin de DNS, este sistema #[em round-robin] es un método de balanceo de cargas sobre un número determinado de recursos; el DNS por turno, es una forma común de garantizar que la carga de solicitudes DNS se distribuya de manera uniforme y, sin embargo, este enfoque no es confiable, porque deja la conmutación, por error de la aplicación del lado del cliente. (Abad, A. 2018)
                br
                br
                |Otra solución más robusta y confiable es utilizar sistemas que permitan una reasignación flexible de direcciones IP, como IP flotantes.
                br
                br
                |Esta reasignación bajo demanda, elimina los problemas de propagación y almacenamiento en caché, haciendo que los cambios en el DNS se puedan reasignar fácilmente, cuando este sea necesario; se debe decir qué nombre de dominio puede permanecer asociado con la misma dirección IP, mientras que la propia dirección IP se mueve entre diferentes servidores. (Sinisterra, M. 2012)

          .row(
            titulo='¿Cuáles son los componentes del sistema que se requieren para la alta disponibilidad?'
          )
            .col-12
              p Existen varios componentes que hay que tener en cuenta para implementar la alta disponibilidad a la hora de actuar, estos componentes son:
              br 
              ul
                li 
                  i.fas.fa-check.color-icon-check
                  | Medio ambiente: el tener todos los servidores en una misma área sería una mala idea, ya que una condición ambiental como un terremoto, inundaciones u otras, podrían destruir todo el sistema, lo ideal es tener servidores redundantes en diferentes centros de datos aumentara la confiabilidad.
                li 
                  i.fas.fa-check.color-icon-check
                  | #[em Hardware:] los servidores deben ser resistentes a sobrecargas eléctricas, cortes de energías y fallos de #[em hardware]; esto incluye discos duros e interfaz de red.
                li 
                  i.fas.fa-check.color-icon-check
                  | #[em Software:] todo sistema operativo, programas y la propia aplicación debe estar configurada para manejar fallos inesperados que podrían requerir un reinicio del sistema.
                li 
                  i.fas.fa-check.color-icon-check
                  | Datos: uno de los factores más cruciales es la pérdida de datos y esta no se limita a fallos en el disco duro; los sistemas de alta disponibilidad deben tener en cuenta la seguridad de los datos, en caso tal que falle el sistema.
                li 
                  i.fas.fa-check.color-icon-check
                  | Red: otro posible fallo son las interrupciones en la red, es importante que exista una red redundante para evitar posibles fallos.

          .row(
            titulo='¿Qué <em>software</em> se necesita usar para configurar la alta disponibilidad?'
          )
            .col-12
              p Cada sistema tendrá necesidades diferentes en cuanto a #[em software] y configuración; sin embargo, a nivel de aplicación, los equilibradores de carga representan una pieza fundamental; es por esto que se necesita de #[em software] como HAProxy, que es una opción para el equilibrio de carga, debido a que puede manejar varias capas y para diferentes servidores, como los de bases de datos. (Sinisterra, M. 2012)
                br
                br
                |Es importante implementar una solución redundante que sea confiable para el punto de entrada de su aplicación, para eliminar este único punto de falla; como se mencionó anteriormente, necesitamos implementar un grupo de equilibradores de carga, detrás de una IP flotante y es por eso que, #[em Corosny] y #[em Pacemaker], son opciones para crear dicha configuración. (Abad, A. 2018)
          .row(
            titulo='¿Disponibilidad y redundancia que diferencias encontramos? '
          )
            .col-12
              p La redundancia generalmente va orientada en el&nbsp;
                i hardware&nbsp;
                | y la alta disponibilidad va enfocada en la implementación de estrategias, estas, en algunos casos, utilizan algún&nbsp;
                i software&nbsp;
                | y es por eso que la redundancia no asegura la alta disponibilidad.

            p Una infraestructura tecnológica necesita utilizar herramientas para asegurar la detección de fallos para así poder tomar las medidas correctivas; existen enfoques de arriba a abajo de alta disponibilidad que pueden ser efectivos, y estrategias que se basan en el&nbsp;
              i hardware o software&nbsp;
              | que reducen los tiempos cuando existe una inactividad.

      .col-lg-4
        figure(data-aos='zoom-in')
          img.img400.m-auto(
            src='@/assets/template/tema02/t2-i7.png',
            alt='alt'
          ) 

    h3.mb-5
      i.fas.fa-square.cac.me-3
      | La alta disponibilidad reduce la incidencia de fallos

    .row.mb-5
      .col-lg-4.col-2
        figure(data-aos='zoom-in')
          img(src='@/assets/template/tema02/t2-i8.png')
      .col-lg-8.col-10
        p Para tener un sistema que sea tolerante a fallos, es necesario poseer un #[em hardware] con capacidades redundantes y especializado, que pueda ser capaz de detectar un componente averiado o dañado y sea capaz de poder continuar normalmente con los procesos. Es por eso que la alta disponibilidad permite implementar estrategias para que los tiempos de actividad sean óptimos. (Sinisterra, M. 2012)
        p Es por esto que la redundancia permite utilizar un sistema secundario cuando el sistema principal posee alguna falla, este proceso de cambios entre sistemas se debe hacer sin incidir en los tiempos de actividad. Los sistemas de alta disponibilidad tienen una recuperación rápida, pero existen riesgos ya que, deben reiniciarse por sí solos y en este lapso pueden ocurrir muchas situaciones, los sistemas que toleran las fallas suelen brindar una mayor protección a las organizaciones contra equipos con defectos, pero son muy costosos y no aseguran la protección contra fallos de&nbsp;
          i software.
    .row.mb-5
      .col-lg-7.col-12
        .row
          .col-lg-12.mb-5
            .cajon.color-acento-contenido-2.p-4
              p.mb-0 Es importante estudiar la alta disponibilidad en situaciones de recuperación ante fallos externos, de tipo ambiental, electrónico entre otros; así como suena, es un plan integral para la recuperación de operaciones y sistemas críticos después de eventos catastróficos.
          .col-lg-12
            p En torno a lo anterior se debe hacer la siguiente pregunta, 
              strong ¿por qué participar en este tipo de planificación?
            p Generalmente, se enfoca en volver a estar activos y funcionar, luego que haya ocurrido un evento catastrófico. Un plan de recuperación de desastres puede hacer frente a la pérdida de una región entera. (Abad. 2018)
      .col-lg-5.col-12
        figure(data-aos='zoom-in')
          img(src='@/assets/template/tema02/t2-i9.png')

    .row.d-flex.justify-content-center.mb-2
      .col-12
        .bloque-texto-g.color-tercero.p-3.p-sm-4.p-md-4
          .col-lg-4
            .bloque-texto-g__img(
              :style='{ "background-image": `url(${require("@/assets/template/tema02/t2-i10.png")})` }'
            )(
              data-aos='zoom-in'
            )
          .col-lg-8
            .contenedor-dashed.p-4
              .bloque-texto-g1__texto.p-4
                h2 ¿Cómo implementar la arquitectura usando la alta disponibilidad?

                p No importa el tipo de negocio o el tamaño de la empresa, cualquier tipo de tiempo de inactividad del servicio puede ser costoso sin una solución de recuperación ante desastres, en los últimos años, las soluciones de informática alojada y en la nube se han vuelto más populares que el soporte interno de soluciones, por tal razón reduce costos y adiciona la flexibilidad.

                p Los beneficios de tener un sistema de alta disponibilidad son numerosos:

                ul
                  li 
                    i.fas.fa-check.color-icon-check
                    |
                    | Ahorra tiempo y costos.
                  
                  li 
                    i.fas.fa-check.color-icon-check
                    |
                    | Menos tiempo de inactividad, esto significa menos impacto en los usuarios y clientes.
                  
                  li 
                    i.fas.fa-check.color-icon-check
                    |
                    | Se mejorará el rendimiento de aplicaciones.

                  li 
                    i.fas.fa-check.color-icon-check
                    |
                    | Evitará multas y sanciones, si no se cumple con los SLA del contrato.   


</template>

<script>
export default {
  name: 'Tema2',
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
