<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.mb-5
      .col-lg-1.col-2
        figure(data-aos='zoom-in')
          img(src='@/assets/template/introduccion/i-i1.png')
      .col-lg-11.col-10
        p Apreciado aprendiz, bienvenido a este componente formativo, donde se abordarán generalidades y aspectos claves de las pruebas de servicios de red, gestión de redundancia y alta disponibilidad, cálculo de nivel de servicios, mantenimiento predictivo e identificación de fallas. Afiance sus conocimientos, saberes y habilidades en el funcionamiento de servidores y servicios; para lograrlo, realice un estudio responsable de los contenidos de este componente formativo, diseñado con base en postulados de autores conocidos y expertos en el tema.
          br
          br
          |En el siguiente video conocerá, de forma general, la temática que se estudiará a lo largo del componente formativo.

    .col-lg-12
      figure
        .video
          iframe(
            width='560',
            height='315',
            src='https://www.youtube.com/embed/T8GgLIHwA_4',
            title='Pruebas DNS',
            frameborder='0',
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture',
            allowfullscreen
          )
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
