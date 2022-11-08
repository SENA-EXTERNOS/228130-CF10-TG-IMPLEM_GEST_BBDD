<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Identificación de fallas

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
                | Mal diseño o mala selección del material
              li 
                i.fas.fa-check.color-icon-check
                |
                | Imperfecciones del material, del proceso y/o de su fabricación
              li 
                i.fas.fa-check.color-icon-check
                |
                | Errores que se pueden producir en el servicio
              li 
                i.fas.fa-check.color-icon-check
                |
                | Fallas en la calidad
              li 
                i.fas.fa-check.color-icon-check
                |
                | Factores ambientales, sobrecargas o desgaste por vida útil
      .col-lg-6.col-2
        figure(data-aos='zoom-in')
          img(src='@/assets/template/tema05/t5-i1.png')

    p.mb-5 Se pueden presentar diferentes tipos de fallas, los cuales se aprecian en tres etapas:

    .tarjeta.tarjeta--acento-botones.p-4.mb-5
      SlyderA(tipo='b')
        .row
          .col-md-7.mb-4.mb-md-0
            h2 Fallos iniciales
            p Se caracteriza por tener una elevada tasa de fallos que desciende rápidamente con el tiempo, estos fallos pueden deberse a diferentes razones como son instalaciones incorrectas, errores de diseño, desconocimiento por parte de operarios, equipos con defectos, (Montoya, M. et al, 2020).

          .col-md-5
            figure
              img(
                src='@/assets/template/tema05/t5-i2.png',
                alt='Texto que describa la imagen'
              )            
        .row
          .col-md-7.mb-4.mb-md-0
            h2 Fallos Normales
            p En esta etapa la tasa de errores es menor y constante, los fallos se producen a causas inherentes al equipo, si no por causas externas, estas pueden ser accidentes fortuitos, mala operación, condiciones que no son adecuadas, (Luna, 2019).

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
              p.mb-0 Recuerde explorar los demás recursos que se encuentran disponibles en este componente formativo, para ello diríjase al menú principal en donde encontrará la síntesis, una actividad didáctica, material complementario, entre otros.  

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
