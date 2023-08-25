<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Mantenimiento predictivo e identificación de fallas

    .row.mb-5
      .col-lg-6.col-12
        .row 
          .col-lg-12           
            p Para poder referirse al mantenimiento predictivo, es necesario dar a conocer la importancia en la prevención de eventos catastróficos o fallas. Es por esto, que se hace necesario implementar un plan donde incorporen técnicas, datos y criterios, dando como resultado la prevención de los daños, garantizando que en el momento preciso se puedan determinar las medidas correctivas y así el funcionamiento de un activo no se vea afectado.
            p En las estrategias de mantenimiento preventivo se hace fundamental realizar los siguientes pasos: verificaciones programadas, modelo de actualización, mantenimiento y el cambio de partes, monitoreo continuo y el análisis de los datos.
            .cajon.color-acento-contenido.p-4
              p.mb-0 Finalmente, se concluye que los costos de funcionamiento en las organizaciones, han disminuido gracias a la implementación de planes de mantenimiento predictivo, dado que han de generar soluciones en el tiempo preciso, prediciendo fallos en los procesos.
      .col-lg-6.col-12
        figure(data-aos='zoom-in')
          img(src='@/assets/template/tema04/t4-i1.png')

    p.mb-5 Actualmente se implementan de manera efectiva en muchas empresas del mundo los diferentes tipos de mantenimiento predictivo o preventivo, los cuales se presentan a continuación:

    .row.justify-content-center.mb-5
      .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left").h-21
          .crd_hover_txt--img
            figure
              img(src="@/assets/template/tema04/t4-i2.png", alt="alt")
          .crd_hover_txt--body
            h4.mb-4 Mantenimiento basado en el uso  
            p.mb-0 Se calcula basándose en datos históricos y tiempos de uso del activo; se puede saber aproximadamente la vida útil de un dispositivo, si se necesita cambiar la pieza; también se puede determinar en qué tiempo se hace necesario hacer revisiones o mantenimientos programados y además se podrá determinar un estimado de duración de la pieza, dependiendo del cómo se ejecuta en la máquina a utilizar. (Mago. M & Pachón, S, 2021)

      .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left").h-21
          .crd_hover_txt--img
            figure
              img(src="@/assets/template/tema04/t4-i3.png", alt="alt")
          .crd_hover_txt--body
            h4.mb-4 Mantenimiento es basado en un calendario o tiempo 
            p.mb-0 Este es más fácil, requiere cierto nivel de análisis para obtener los plazos correctos, este tipo de mantenimiento gira en torno a controles y procedimientos que se realizan a intervalos regulares; cuando se acerca la fecha para el mantenimiento, se avisa al personal para que realice el mantenimiento, lo que permite hacer cambio de partes con anticipación, evitando las compras inmediatas. (Montoya, M. 2020)

      .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left").h-21
          .crd_hover_txt--img
            figure
              img(src="@/assets/template/tema04/t4-i4.png", alt="alt")
          .crd_hover_txt--body
            h4.mb-4 Mantenimiento prescriptivo  
            p.mb-0 Este proceso de nivel avanzado, no solamente se encarga de predecir cuando algún componente del sistema pueda fallar por algún evento interno o externo, o que sencillamente necesite de mantenimiento; también es capaz de evaluar, de manera amplia, múltiples variables que puedan incluir en diferentes problemas y causen fallas al sistema. (Luna, M. 2019)

    p.mb-5 El mantenimiento preventivo ofrece beneficios especiales, ya que puede usarse junto con otros tipos de sistemas de mantenimiento, algunos de los principales beneficios son:

    .row.justify-content-center
      .col-lg-8.col-12 
        h3.text-center.mb-5 Beneficios del mantenimiento preventivo

        ImagenInfografica.color-acento-botones.mb-5
          template(v-slot:imagen)
            figure
              img(
                src='@/assets/template/tema04/t4-i5.svg',
                alt='Texto que describa la imagen'
              )(data-aos='zoom-in')

          .tarjeta.color-acento-beige.p-4(x='10%', y='70%', numero='+')
            p Los equipos, maquinarias pueden llegar a ser muy caros, por lo que un mantenimiento apropiado garantiza que la inversión dure mayor tiempo.

          .tarjeta.color-acento-beige.p-4(x='36%', y='70%', numero='+')
            p Programar los procedimientos y tener idea de tareas futuras reduce la cantidad de mantenimiento necesario que pueda surgir.

          .tarjeta.color-acento-beige.p-4(x='62%', y='70%', numero='+')
            p Genera un sistema organizado donde las reparaciones, inspecciones y mantenimiento regular estén bien programados.

          .tarjeta.color-acento-beige.p-4(x='88%', y='70%', numero='+')
            p Reduce la cantidad de averías no planificadas, por lo tanto, el tiempo de indisponibilidad.
       
    .row.mb-5
      .col-lg-4.col-2
        figure(data-aos='zoom-in')
          img(src='@/assets/template/tema04/t4-i6.png')       
      .col-lg-8.col-10
        .row 
          .col-lg-12           
            p.mb-3 El objetivo de implementar el mantenimiento preventivo es encontrar y corregir los problemas descubiertos antes que se produzcan fallas en los componentes o sistema en general, se puede decir que el mantenimiento preventivo es un plan que tiene como finalidad la conservación de una máquina o equipo, para esto se define un listado de actividades a realizar por el usuario, operador y encargados de hacer el mantenimiento, este asegura el óptimo funcionamiento de la infraestructura o sistema.
            .cajon.color-acento-contenido.p-4.mb-3
              p.mb-0 Para la realización de un mantenimiento preventivo, es necesario hacer una revisión y limpieza para que este garantice un óptimo funcionamiento y fiabilidad, lo que quiere decir que, si realizamos un buen mantenimiento preventivo, podrá conseguir alargar la vida útil del equipo y prevenir, en consecuencia, suspensiones de los procesos. (Luna, 2019)
            p No se puede dejar de relacionar el mantenimiento preventivo con la disponibilidad, ya que son variables que van de la mano, por lo tanto, se debe resaltar que la disponibilidad en el trabajo completo que se le da a un equipo y la confiabilidad que este tiene en operación. La disponibilidad de un equipo representa el tiempo disponible de un sistema al servicio de la unidad de producción, la cual se calculó en porcentaje en un tiempo determinado.

    .row.mb-5
      .col-lg-8.col-10
        .row 
          .col-lg-12           
            p.mb-3 Hay usuarios que afirman que se necesita la disponibilidad del equipo, así como se necesita la seguridad, ya que es indispensable un equipo que esté fuera de servicio. Hay varios medios para lograrlo, y uno es construir los equipos extremadamente fiables y consecuentemente, de mayor valor. El segundo es suministrar un sistema que, aunque falle, sea fácil de recuperar; de esta forma, si todo está construido muy fiablemente y es fácil de reparar, el fabricante obtiene un sistema muy eficaz, pero que aumenta considerablemente su valor. (Montoya, M. 2020)
            .cajon.color-acento-botones-3.p-4.mb-3
              p.mb-0 El factor disponibilidad de un equipo o sistema es la medida que indica cuánto tiempo está funcionando ese equipo o sistema operativo respecto de la duración total durante el periodo en el que se desea que funcione. Típicamente se expresa en porcentaje (Luna. M., 2019)
      .col-lg-4.col-2
        figure(data-aos='zoom-in')
          img(src='@/assets/template/tema04/t4-i7.png')  

    .row.d-flex.justify-content-center.mb-2
      .col-11.mb-5
        .bloque-texto-g.color-tercero.p-3.p-sm-4.p-md-4
          .col-lg-4
            .bloque-texto-g1__img(
              :style='{ "background-image": `url(${require("@/assets/template/tema04/t4-i8.png")})` }'
            )(
              data-aos='zoom-in'
            )
          .col-lg-8
            .contenedor-dashed.p-4
              .bloque-texto-g1__texto.p-4
                p La disponibilidad de un equipo solo puede aumentarse disminuyendo el tiempo fuera de servicio, lo cual es posible con la mejora de los sistemas administrativos, los procedimientos, la selección, el entrenamiento, la motivación, la calidad y dotación de herramientas, el equipo de diagnóstico. Por lo tanto, se requieren de herramientas que permitan tomar decisiones rápidas y acertadas sobre sus principales recursos.  
    
    ul.lista-ul--color
      li
        i.fas.fa-square
        h3.mb-0 Identificación de fallas
    
    .row.mb-5
      .col-lg-6.col-10
        .row 
          .col-lg-12           
            p Se puede identificar una falla cuando un componente, pieza o infraestructura queda completamente inservible o tiene un funcionamiento defectuoso y este hace que los procesos tengan retrasos, también se puede decir que cuando su funcionamiento es poco confiable debido a las fallas y estas presentan riesgos, las causas de las fallas pueden ser múltiples, estas se mencionan a continuación:
            br
            ul
              li 
                i.fas.fa-check.color-icon-check
                |
                | Mal diseño o mala selección del material.
              li 
                i.fas.fa-check.color-icon-check
                |
                | Imperfecciones del material, del proceso y/o de su fabricación.
              li 
                i.fas.fa-check.color-icon-check
                |
                | Errores que se pueden producir en el servicio.
              li 
                i.fas.fa-check.color-icon-check
                |
                | Fallas en la calidad.
              li 
                i.fas.fa-check.color-icon-check
                |
                | Factores ambientales, sobrecargas o desgaste por vida útil.
      .col-lg-6.col-2
        figure(data-aos='zoom-in')
          img(src='@/assets/template/tema05/t5-i1.png')

    p.mb-5 Se pueden presentar diferentes tipos de fallos, los cuales se aprecian en tres etapas:

    .tarjeta.tarjeta--acento-botones.p-4.mb-5
      SlyderA(tipo='b')
        .row
          .col-md-7.mb-4.mb-md-0
            h2 Fallos iniciales
            p Se caracteriza por tener una elevada tasa de fallos que desciende rápidamente con el tiempo; estos fallos pueden deberse a diferentes razones como son instalaciones incorrectas, errores de diseño, desconocimiento por parte de operarios, equipos con defectos. (Montoya, M. 2020)

          .col-md-5
            figure
              img(
                src='@/assets/template/tema05/t5-i2.png',
                alt='Texto que describa la imagen'
              )            
        .row
          .col-md-7.mb-4.mb-md-0
            h2 Fallos Normales
            p En esta etapa, la tasa de errores es menor y constante; los fallos se producen, no por causas inherentes al equipo, sino por causas externas; estas pueden ser accidentes fortuitos, mala operación, condiciones que no son adecuadas (Luna, 2019).

          .col-md-5
            figure
              img(
                src='@/assets/template/tema05/t5-i3.png',
                alt='Texto que describa la imagen'
              )            
        .row
          .col-md-7.mb-4.mb-md-0
            h2 Fallos de desgaste
            p Se caracteriza por una tasa de error creciente, los fallos se producen por desgaste natural de uso en un transcurso de tiempo.

          .col-md-5
            figure
              img(
                src='@/assets/template/tema05/t5-i4.png',
                alt='Texto que describa la imagen'
              )

    .row.mb-5
      .col-lg-1.col-2
        figure(data-aos='zoom-in')
          img(src='@/assets/template/tema05/t5-i5.png')                       
      .col-lg-11.col-10
        .row 
          .col-lg-12           
            p En conclusión, se necesita identificar a qué tipo de falla se está enfrentando para así poder desarrollar un plan de mantenimiento, es por esto que se requiere analizar cada una de las características de los fallos y así poder determinar la mejor solución.
            .cajon.color-acento-contenido.p-4
              p.mb-0 Recuerde explorar los demás recursos que se encuentran disponibles en este componente formativo; para ello, diríjase al menú principal, donde encontrará la síntesis, una actividad didáctica para reforzar los conceptos estudiados, material complementario, entre otros.
</template>

<script>
export default {
  name: 'Tema3',
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
