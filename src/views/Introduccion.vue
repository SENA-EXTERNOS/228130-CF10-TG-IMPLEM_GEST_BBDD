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
        p Querido aprendiz, reciba cordial bienvenida a este aprendizaje basado en la temática de las pruebas de servicios de red, gestión de redundancia y alta disponibilidad, cálculo de nivel de servicios, mantenimiento predictivo e Identificación de fallas; para la elaboración de este componente, se abordarán varios autores conocidos en estos temas de quienes se han citado y referenciado conceptos para los fines educativos, se sugiere mirar el siguiente video para identificar el contexto de aprendizaje.
        br 
        strong ¡Muchos éxitos en este proceso!

    .col-lg-12
      figure
        .video
          iframe(
            width='560',
            height='315',
            src='https://www.youtube.com/watch?v=fQjFfH7hNYU',
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
