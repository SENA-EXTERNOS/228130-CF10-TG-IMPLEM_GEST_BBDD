<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono='fas fa-sitemap', titulo='Síntesis')
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .row 
      .col-lg-10.col-12 
        .titulo-sexto.color-acento-contenido.mb-5
          h5 Implementación y gestión de bases de datos
          br
          span Síntesis: Funcionamiento de servidores y servicios
      .col-lg-2.d-none.d-lg-block
        img(
          src='@/assets/template/logo-sena-naranja.svg',
          height='60',
          alt='alt'
        )

    p.mb-5 Estimado aprendiz se le invita a revisar la temática abordada en el siguiente mapa mental diseñado.

    .col-lg-10.col-12 
        .titulo-sexto.color-acento-contenido.mb-5
          h5 Figura 2.
          br
          i Síntesis servicios de red
    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src='@/assets/template/sintesis/s-1.jpg', alt='alt')
      .col-lg-3
        a.anexo.mb-4(
          :href='obtenerLink("/downloads/sintesis.pdf")',
          target='_blank'
        )
          .anexo__icono
            img(src='@/assets/template/icono-pdf.svg')
          .anexo__texto
            p Anexo. Síntesis
</template>

<script>
export default {
  name: 'Sintesis',
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
