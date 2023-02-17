<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Cálculo de nivel de servicios

    .row.mb-5
      .col-lg-6.col-12
        p Los indicadores brindan unos beneficios, como garantizar el control del monitoreo con mayor precisión y crear la capacidad de prestar más concentración a lo que necesita más atención. Si la empresa obtiene un aumento en el MTBF (Medio Tiempo de Fallos) después del mantenimiento, el indicador refiere una mejora en la calidad de los procesos, con un producto final de mayor credibilidad ante los consumidores; un buen resultado en el MTBF, puede indicar que los métodos de la empresa están bien ejecutados, el MTTR (Tiempo Medio de Reparación) a su vez, debe reducirse al máximo, para que su resultado se considere bueno; un índice MTTR bajo, evita una pérdida de productividad en los equipos o sistemas que no se encuentren disponibles y prende alarmas para que la empresa brinde respuestas rápidas y alternativas a fallas de los procesos. (Montoya, M. 2020)
      .col-lg-6.col-12
        figure(data-aos='zoom-in')
          img(src='@/assets/template/tema03/t3-i1.png')

    .row.mb-5
      .col-lg-1.col-2
        figure(data-aos='zoom-in')
          img(src='@/assets/template/tema03/t3-i2.png')
      .col-lg-11.col-10
        p Para el seguimiento de la implementación del MTTR y el MTBF se deben seguir algunos procedimientos; se inicia identificando las fallas que se ven representados en los informes, este permite notar ocurrencias por patrón de falla e impacto calculado a través del tiempo, luego se podrá notar la disminución en el tiempo de inactividad, este permite determinar que componentes y dispositivos tienen fallas y con esto poder solucionar el problema.

    .row.d-flex.justify-content-center.mb-5
      .col-lg-9
        .cajon.color-acento-botones.p-4
          p.mb-0 Por último, se debe desarrollar un plan de mantenimiento preventivo, esto con el fin de reducir el número de mantenimientos que se puedan derivar de problemas o fallos.

    AcordionA(tipo='a', clase-tarjeta='tarjeta tarjeta--griss')
      .row(titulo='¿Qué es MTTR?')
        .col-md-7.mb-4.mb-md-0
          p El MTTR traduce “tiempo medio de reparación”, este define en cuánto tiempo se demora en realizar la reparación de un daño detectado previamente, la medición que se genera en todo el intervalo en el que se gestiona la reparación y el tiempo en devolver el activo a sus condiciones originales para el adecuado funcionamiento, da inicio a la incidencia y finaliza cuando el daño se soluciona.
          p El proceso donde se detecta la falla no es tenido en cuenta, ya que la avería ha tenido que ser detectada, por eso se puede decir que los indicadores de calidad están directamente relacionados con la implementación de un plan de mantenimiento correctivo, debido a esto, los datos obtenidos de los valores del MTTR se procesan para así identificar las paradas importantes en todo el proceso.

        .col-md-5
          figure
            img(
              src='@/assets/template/tema03/t3-i3.png',
              alt='Texto que describa la imagen'
            )
      .row(titulo='¿Cómo se calcula MTTR?')
        .col-md-7.mb-4.mb-md-0
          p Las variables que determinan el valor del MTTR son:        
          br
          ul
            li 
              i.fas.fa-check.color-icon-check
              |
              | Cantidad de tiempo que ha demorado en resolver los fallos en los activos.
            li 
              i.fas.fa-check.color-icon-check
              |
              | Cantidad de operaciones de mantenimiento.
          p La fórmula del MTTR divide el tiempo del mantenimiento correctivo entre el número de operaciones acometidas para reparar las averías, de modo que este avisa cuánto se tarda en reparar un fallo.
            br
            br
            |La fórmula sería:
            br
            |MTTR = al tiempo de mantenimiento correctivo / cantidad de actuaciones de reparación.
            br
            br
            |Para que el cálculo del MTTR desprenda información importante se recomienda calcular el MTTR de forma independiente por cada activo o proceso de producción.

        .col-md-5
          figure
            img(
              src='@/assets/template/tema03/t3-i4.png',
              alt='Texto que describa la imagen'
            )
      .row(titulo='¿Qué es MTBF? ')
        .col-md-7.mb-4.mb-md-0
          p Se define como el tiempo medio entre fallos; este representa cuánto tiempo en promedio dura un activo en funcionar, entre un fallo y otro, es decir que, permite identificar el tiempo medio en que puede operar un equipo o dispositivo; este intervalo entre paradas que son ocasionados por averías o fallas, hace alusión al concepto antes mencionado.
            br
            br
            |Los valores generados desde el MTBF ayudan a detectar qué tipos de paradas son las que se generan con más frecuencia, este mide la disponibilidad de los equipos; a continuación, se conocerán las propiedades de los activos:
          br
          ul
            li 
              i.fas.fa-check.color-icon-check
              |
              | El diseño y la construcción.
            li 
              i.fas.fa-check.color-icon-check
              |
              | El desarrollo en la instalación.
            li 
              i.fas.fa-check.color-icon-check
              |
              | Las operaciones de mantenimiento que se han realizado anteriormente.

        .col-md-5
          figure
            img(
              src='@/assets/template/tema03/t3-i5.png',
              alt='Texto que describa la imagen'
            )
      .row(titulo='¿Cómo se calcula el MTBF?')
        .col-md-7.mb-4.mb-md-0
          p Existen factores para determinar los valores del MTBF que son:
          br
          ul
            li 
              i.fas.fa-check.color-icon-check
              |
              | El tiempo durante la disponibilidad.
            li 
              i.fas.fa-check.color-icon-check
              |
              | La duración tras una avería.
            li 
              i.fas.fa-check.color-icon-check
              |
              | Las veces que se ha paralizado el funcionamiento.
          p La fórmula del MTBF será la inversa de la frecuencia con la que se produzcan las paradas:
            br
            |La fórmula para MTBF = (tiempo total disponible - tiempo de inactividad) / número de paradas.

        .col-md-5
          figure
            img(
              src='@/assets/template/tema03/t3-i6.png',
              alt='Texto que describa la imagen'
            )
      .row(titulo='Importancia de MMTR y MFBF')
        .col-md-7.mb-4.mb-md-0
          p Ambos son indicadores de rendimiento y sugieren informaciones diferentes, pero igualmente relevantes, para un gestor de SAT (Servicios Avanzados de Tecnología); se podría decir que su análisis en conjunto, permite que las conclusiones sean muy completas. Ambas tienen en común que ponen de relieve los costos de mantenimiento durante un periodo de tiempo concreto, en la medida en la que dan datos sobre la frecuencia de las paradas y duración de los tiempos; desde otro punto de vista, el análisis en conjunto de las dos métricas, también permite a las organizaciones, realizar estimaciones precisas sobre la producción, porque tendrá información confiable de sus activos y sobre el tiempo que estos permanecerán en una situación de #[em Downtime.] (Montoya, M. 2020)
            br
            br
            |Aislando el análisis de MTTR, se deduce fácilmente la necesidad de que su valor sea el mínimo posible, si el MTTR es elevado, eso definirá que el SAT tarda demasiado en volver a poner los equipos puesta en marcha después de un incidente.
            br
            br
            |Por otro lado, si se basa en el valor del MTBF se pueden detectar qué activos son los que necesitan mayor atención, por lo que se facilitará la elección del plan de mantenimiento que resulte adecuado; se puede decir que las ediciones del MTBF también sugieren que los activos sean fiables y permite a la empresa saber si sus acciones de mantenimiento preventivo están dando un resultado óptimo.
            br
            br
            |Es así como los indicadores MTTR y MTBF son unas valiosas métricas cuya información revela la confiabilidad de los activos y el tiempo de mantenimiento que cada uno necesita.

        .col-md-5
          figure
            img(
              src='@/assets/template/tema03/t3-i7.png',
              alt='Texto que describa la imagen'
            )
      .row(titulo='Ventajas de implementar la medición del MTBF ')
        .col-md-7.mb-4.mb-md-0
          ul
            li 
              i.fas.fa-check.color-icon-check
              |
              | Averiguar que equipos son menos fiables.
            li 
              i.fas.fa-check.color-icon-check
              |
              | Conocer que activos requieren un mayor mantenimiento.
            li 
              i.fas.fa-check.color-icon-check
              |
              | Predicción operativa de instalaciones.
            li 
              i.fas.fa-check.color-icon-check
              |
              | Reducción de paradas imprevistas.
            li 
              i.fas.fa-check.color-icon-check
              |
              | Diseñar un plan de mantenimiento.
            li 
              i.fas.fa-check.color-icon-check
              |
              | Ajustar procedimientos de mantenimientos.

        .col-md-5
          figure
            img(
              src='@/assets/template/tema03/t3-i8.png',
              alt='Texto que describa la imagen'
            )
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
