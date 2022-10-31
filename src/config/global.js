export default {
  global: {
    componenteFormativo: 'Funcionamiento de servidores y servicios',
    descripcionCurso:
      'Es importante entender el funcionamiento de los servicios que ofrece la internet, ya que estos permiten la interconexión de servidores, garantizando una eficiente búsqueda de la información, también se debe hablar de los fallos que pueden llegar a presentar componentes, piezas e infraestructuras tecnológicas para así poder desarrollar planes de contingencia y mitigar el impacto negativo.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Pruebas de servicios de red',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Gestión de redundancia y alta disponibilidad',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Cálculo de nivel de servicios',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Mantenimiento predictivo',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Identificación de fallas',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Windows Server 2008',
      referencia:
        'Philippe, F. (2010). <em>Windows Server 2008: los servicios de red TCP / IP.</em>',
      tipo: 'Libro PDF',
      link:
        'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1j5choe/sena_biblioteca_eniRIT08TCP',
    },
    {
      tema: 'Programación de mantenimiento preventivo ',
      referencia:
        'Montoya, M., Arango, J., and Rosero, S. (2020). <em>Programación de mantenimiento preventivo usando algoritmos genéticos.</em>',
      tipo: 'Libro PDF',
      link:
        'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1i756fj/TN_cdi_doaj_primary_oai_doaj_org_article_a13fb336c47f44ddbd252db37e41e1b1',
    },
    {
      tema: 'Seguridad ',
      referencia: 'Abad, A. (2018). <em>Seguridad y alta disponibilidad.</em>',
      tipo: 'Libro PDF',
      link:
        'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1j5choe/sena_alfaomega53992',
    },
    {
      tema: 'Redes de computadores',
      referencia:
        'Sánchez, M., Barchino, R., y Martínez, J. (2020). <em>Redes de computadores.</em>',
      tipo: 'Libro PDF',
      link:
        'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1j5choe/sena_elibroELB131606',
    },
  ],
  glosario: [
    {
      termino: 'Dominio',
      significado:
        'un dominio de internet es un nombre único que identifica a una subárea de Internet. El propósito principal de los nombres de dominio en Internet y del sistema​ de nombres de dominio.',
    },
    {
      termino: '<em>Gluster</em>',
      significado:
        'el sistema de archivos <em>Gluster, Gluster File System o GlusterFS,</em> es un sistema multiescalable de archivos para NAS desarrollado inicialmente por <em>Gluster Inc.</em> Este permite agregar varios servidores de archivos sobre <em>Ethernet</em> o interconexiones <em>Infiniband</em> RDMA en un gran entorno de archivos de red en paralelo.',
    },
    {
      termino: 'IP',
      significado:
        'la dirección IP es una etiqueta numérica, por ejemplo "192.0.10.1" que identifica, de manera lógica y jerárquica, a una interfaz en la red (elemento de comunicación/conexión) de un dispositivo (computadora, laptop, teléfono inteligente) que utilice el Protocolo de Internet (<em>Internet Protocol</em>) o que corresponde al nivel de red del modelo TCP/IP.',
    },
    {
      termino: '<em>Outlook</em>',
      significado:
        'es el servicio de correo electrónico basado en la web de Microsoft.',
    },
    {
      termino: 'Proveedor de servicios',
      significado:
        'es una entidad que presta servicios a otras entidades. Por lo general, esto se refiere a un negocio que ofrece la suscripción o servicio web a otras empresas o particulares.',
    },
    {
      termino: 'RAID',
      significado:
        '<em>in grupo/matriz</em> redundante de discos independientes​ hace referencia a un sistema de almacenamiento de datos que utiliza múltiples unidades, entre las cuales se distribuyen o replican los datos.',
    },
    {
      termino: 'Redundancia',
      significado:
        'los sistemas redundantes, en ingeniería de computadores, son aquellos en los que se repiten aquellos datos o <em>hardware</em> de carácter crítico que se quiere asegurar ante los posibles fallos que puedan surgir por su uso continuado.',
    },
    {
      termino: '<em>Router</em>',
      significado:
        'es un dispositivo que permite interconectar redes con distinto prefijo en su dirección IP.',
    },
    {
      termino: 'SLA',
      significado:
        'un acuerdo de nivel de servicio, también conocidas por las siglas SLA, es un acuerdo escrito entre un proveedor de servicio y su cliente con objeto de fijar el nivel acordado para la calidad de dicho servicio.',
    },
    {
      termino: 'XtraBD',
      significado:
        '<em>Percona XtraDB</em> es un motor de almacenamiento para las bases de datos de MariaDB y <em>Percona Server</em>, y está diseñado como un reemplazo directo de InnoDB, que es el motor predeterminado en MySQL.',
    },
  ],
  referencias: [
    {
      referencia:
        'Abad, A (2018). <em>Seguridad y alta disponibilidad.</em> España: España, 2018.',
      link:
        'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1j5choe/sena_alfaomega53992',
    },
    {
      referencia:
        'Luna, M, & Vázquez, G. (2019). Metodología de mantenimiento predictivo 4.0 para asegurar procesos de producción. <em>Revista de sistemas, cibernética e informática</em> 16 (2), p. 1-6',
      link:
        'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1i756fj/TN_cdi_doaj_primary_oai_doaj_org_article_3d32305d26684f2b96a4a784aeec34c9',
    },
    {
      referencia:
        'Mago, M. & Rocha, S. (2021). Diseño e implementación del plan de mantenimiento preventivo de los equipos de la empresa granitos y mármoles acabados SAS. <em>Revista ciencia y poder aéreo</em> 16(2).',
      link:
        'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1i756fj/TN_cdi_doaj_primary_oai_doaj_org_article_0ea47d3304b145a19f98fa78130dfc3c',
    },
    {
      referencia:
        'Marchand, W. & Vega, E. (2020). Modelo <em>Balanced Scorecard</em> para los controles críticos de seguridad informática según el <em>Center for Internet Security (CIS). Interfases</em> 13, p. 57-76',
      link:
        'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1i756fj/TN_cdi_doaj_primary_oai_doaj_org_article_ad14fe07a9314dc6909fd55054d8316a',
    },
    {
      referencia:
        'Montoya, M., Arango, J., & Rosero, S. (2020). Programación de mantenimiento preventivo usando algoritmos genéticos. <em>Lampsakos</em> 23, p. 37-44. ',
      link:
        'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1i756fj/TN_cdi_doaj_primary_oai_doaj_org_article_a13fb336c47f44ddbd252db37e41e1b1',
    },
    {
      referencia:
        'Philippe, F. (2010). <em>Windows Server 2008 : Los servicios de Red TCP/IP.</em> Barcelona: Ediciones ENI. ',
      link:
        'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1j5choe/sena_biblioteca_eniRIT08TCP',
    },
    {
      referencia:
        'Sánchez, M., Plata, R., & Martínez, J. (2020). <em>Redes de computadores.</em> Universidad de Alcalá, servicio de publicaciones.',
      link:
        'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1j5choe/sena_elibroELB131606',
    },
    {
      referencia:
        'Sinisterra, M., Diaz, T. y Ruiz, E. (2012). Clúster de balanceo de carga y alta disponibilidad para servicios web y Mail. <em>Informador Técnico</em> 76 (76), p. 93-102 ',
      link:
        'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1i756fj/TN_cdi_doaj_primary_oai_doaj_org_article_b8084052896547348e30a7ffb4dec865',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
