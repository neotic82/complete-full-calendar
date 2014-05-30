var json;
var eventsColors;
var gCal;
var heightModalForm;
var widthModalForm;
var allFields;


// Inicializa las variables necesarias
function initGlobalParams() {
	
	// Inicializamos el combo del color y los colores disponibles
	$('#color').colorPicker({colors: ["#69D2E7","#A7DBD8","#E0E4CC","#F38630","#FA6900","#D95B43","#ECD078","#C7F464","#4ECDC4","#C8C8A9","#83AF9B","#E5FCC2"], transparency: false,showHexField: false});
	
  // Medidas para el alto y ancho del popup del fomulario modal
	heightModalForm = 565; 
	widthModalForm = 420;
	
	// Dinstintas paletas de colores para colocar en los eventos aleatoriamente
	//var eventsColors = ["#D95B43", "#C02942", "#542437","#53777A", "#F07818", "#B5AC01", "#655643", "#80BCA3", "#FF4E50", "#BCBCBC", "#3299BB", "#424242", "#B05574", "#DCD1B4", "#5E9FA3", "#595643"];
	//var eventsColors = ["#8FA189", "#A4B7A1", "#D2C39C","#CCB04F", "#D95E23"];
	//var eventsColors = ["#113F8C", "#01A4A4", "#00A1CB","#61AE24", "#D0D102", "#32742C", "#D70060", "#E54028", "#F18D05", "#616161"];
	//var eventsColors = ["#746D53","#A4794C","#CBA566","#DCB981","#C3795C"]
	var eventsColors = ["#69D2E7","#A7DBD8","#E0E4CC","#F38630","#FA6900","#D95B43","#ECD078","#C7F464","#4ECDC4","#C8C8A9","#83AF9B","#E5FCC2"]
	
	// JSON con los eventos de ejemplo
	json = [
		{
			id: 1,
			title: 'COMUNICACION Y ATENCION AL USUARIO (2014FE0668/4)',
			allDay: true,
			start: '2014-05-23',
			end: '2014-05-24',
			className: 'modaltrigger',
			description: 'Fecha Inicio Inscripcion: 01/04/2014 - Fecha Fin Inscripcion: 15/04/2014',
			color: eventsColors[Math.floor(Math.random() * eventsColors.length)],
			url: 'https://www.asturias.es/portal/site/iaap/template.PAGE/action.process/menuitem.cb3c676a2d31dc4e24afbc52cd6005a0/?javax.portlet.action=true&javax.portlet.tpst=fdd432e522731952a0329d2382300030&javax.portlet.prp_fdd432e522731952a0329d2382300030_flagInscribir=false&javax.portlet.prp_fdd432e522731952a0329d2382300030_clave.numeroEdicion=4&javax.portlet.prp_fdd432e522731952a0329d2382300030_i18n.http.lang=es&javax.portlet.prp_fdd432e522731952a0329d2382300030_action=detalleEdicion&javax.portlet.prp_fdd432e522731952a0329d2382300030_vgnextoid=43718b0371b6a210VgnVCM10000078020a0aRCRD&javax.portlet.prp_fdd432e522731952a0329d2382300030_clave.codigoCurso=2014FE0668&javax.portlet.begCacheTok=com.vignette.cachetoken&javax.portlet.endCacheTok=com.vignette.cachetoken',
			editable: true
		},
		{
			id: 2,
			title: 'ALFABETIZACION DIGITAL (2014FG0322/4)',
			start: '2014-06-21',
			end: '2014-06-24',
			description: 'Fecha Inicio No Comunicada',
			color: eventsColors[Math.floor(Math.random() * eventsColors.length)],
			url: 'https://www.asturias.es/portal/site/iaap/template.PAGE/menuitem.cb3c676a2d31dc4e24afbc52cd6005a0/?javax.portlet.tpst=fdd432e522731952a0329d2382300030&javax.portlet.prp_fdd432e522731952a0329d2382300030_nivel=ALFABETIZACION%20DIGITAL%282014FG0322%2F004%29&javax.portlet.prp_fdd432e522731952a0329d2382300030__forwardPath=%2Fpages%2Fformacion%2FdetalleEdicionResultado.jsp&javax.portlet.prp_fdd432e522731952a0329d2382300030_i18n.http.lang=es&javax.portlet.prp_fdd432e522731952a0329d2382300030__forwardMode=view&javax.portlet.prp_fdd432e522731952a0329d2382300030__forwardContent=text%2Fhtml&javax.portlet.prp_fdd432e522731952a0329d2382300030__forwardState=&javax.portlet.prp_fdd432e522731952a0329d2382300030__forwardName=success&javax.portlet.begCacheTok=com.vignette.cachetoken&javax.portlet.endCacheTok=com.vignette.cachetoken',
			editable: true
		},
		{
			id: 3,
			title: 'CURSO GOSHIN POLICIAL. POLICIA LOCAL DE OVIEDO (RES188)',
			start: '2014-06-23T09:15:00',
			end: '2014-06-23T13:45:00',
			className: 'modaltrigger',
			description: 'CURSO GOSHIN POLICIAL. POLICIA LOCAL DE OVIEDO (RES188)',
			color: eventsColors[Math.floor(Math.random() * eventsColors.length)],
			url: 'https://www.asturias.es/portal/site/iaap/template.PAGE/action.process/menuitem.cb3c676a2d31dc4e24afbc52cd6005a0/?javax.portlet.action=true&javax.portlet.tpst=fdd432e522731952a0329d2382300030&javax.portlet.prp_fdd432e522731952a0329d2382300030_i18n.http.lang=es&javax.portlet.prp_fdd432e522731952a0329d2382300030_action=detalleActividad&javax.portlet.prp_fdd432e522731952a0329d2382300030_identificadorActividad=45892&javax.portlet.prp_fdd432e522731952a0329d2382300030_vgnextoid=43718b0371b6a210VgnVCM10000078020a0aRCRD&javax.portlet.begCacheTok=com.vignette.cachetoken&javax.portlet.endCacheTok=com.vignette.cachetoken',
			editable: true
		},
		{
			id: 4,
			title: 'CUIDADOS AL MAYOR CON INCONTINENCIA (2014MI0123/2)',
			allDay: true,
			start: '2014-06-08',
			end: '2014-06-09',
			className: 'modaltrigger',
			description: 'Fecha Inicio Inscripcion: 25/04/2014 - Fecha Fin Inscripcion: 04/05/2014',
			color: eventsColors[Math.floor(Math.random() * eventsColors.length)],
			url: 'https://www.asturias.es/portal/site/iaap/template.PAGE/menuitem.cb3c676a2d31dc4e24afbc52cd6005a0/?javax.portlet.tpst=fdd432e522731952a0329d2382300030&javax.portlet.prp_fdd432e522731952a0329d2382300030_nivel=CUIDADOS%20AL%20MAYOR%20CON%20INCONTINENCIA%282014MI0123%2F002%29&javax.portlet.prp_fdd432e522731952a0329d2382300030__forwardPath=%2Fpages%2Fformacion%2FdetalleEdicionResultado.jsp&javax.portlet.prp_fdd432e522731952a0329d2382300030_i18n.http.lang=es&javax.portlet.prp_fdd432e522731952a0329d2382300030__forwardMode=view&javax.portlet.prp_fdd432e522731952a0329d2382300030__forwardContent=text%2Fhtml&javax.portlet.prp_fdd432e522731952a0329d2382300030_vgnextoid=43718b0371b6a210VgnVCM10000078020a0aRCRD&javax.portlet.prp_fdd432e522731952a0329d2382300030__forwardState=&javax.portlet.prp_fdd432e522731952a0329d2382300030__forwardName=success&javax.portlet.begCacheTok=com.vignette.cachetoken&javax.portlet.endCacheTok=com.vignette.cachetoken',
			editable: true
		},
		{
			id: 5,
			title: 'PRIMEROS AUXILIOS. NIVEL I (POLICIA LOCAL DE OVIEDO) (RES190)',
			start: '2014-06-06',
			end: '2014-06-09',
			className: 'modaltrigger',
			description: 'Horas Totales: 15:00',
			color: eventsColors[Math.floor(Math.random() * eventsColors.length)],
			url: 'https://www.asturias.es/portal/site/iaap/template.PAGE/menuitem.cb3c676a2d31dc4e24afbc52cd6005a0/?javax.portlet.tpst=fdd432e522731952a0329d2382300030&javax.portlet.prp_fdd432e522731952a0329d2382300030_nivel=PRIMEROS%20AUXILIOS.%20NIVEL%20I%20%28POLICIA%20LOCAL%20DE%20OVIEDO%29%28RES190%29&javax.portlet.prp_fdd432e522731952a0329d2382300030__forwardPath=%2Fpages%2FagendaActividades%2FdetalleActividadResultado.jsp&javax.portlet.prp_fdd432e522731952a0329d2382300030_i18n.http.lang=es&javax.portlet.prp_fdd432e522731952a0329d2382300030__forwardMode=view&javax.portlet.prp_fdd432e522731952a0329d2382300030__forwardContent=text%2Fhtml&javax.portlet.prp_fdd432e522731952a0329d2382300030_claveDiaSeleccionado=14%2F05%2F2014&javax.portlet.prp_fdd432e522731952a0329d2382300030_vgnextoid=43718b0371b6a210VgnVCM10000078020a0aRCRD&javax.portlet.prp_fdd432e522731952a0329d2382300030__forwardState=&javax.portlet.prp_fdd432e522731952a0329d2382300030__forwardName=success&javax.portlet.begCacheTok=com.vignette.cachetoken&javax.portlet.endCacheTok=com.vignette.cachetoken',
			editable: true
		},
		{
			id: 6,
			title: 'CURSO BASICO DE ASISTENCIA SANITARIA ANTE INCIDENTES DE MULTIPLES VICTIMAS (2014FE0704/1)',
			allDay: true,
			start: '2014-06-26',
			end: '2014-06-27',
			className: 'modaltrigger',
			description: 'Fecha Inicio Inscripcion: 28/04/2014 - Fecha Fin Inscripcion: 05/05/2014',
			color: eventsColors[Math.floor(Math.random() * eventsColors.length)],
			url:'https://www.asturias.es/portal/site/iaap/template.PAGE/menuitem.cb3c676a2d31dc4e24afbc52cd6005a0/?javax.portlet.tpst=fdd432e522731952a0329d2382300030&javax.portlet.prp_fdd432e522731952a0329d2382300030_nivel=CURSO%20BASICO%20DE%20ASISTENCIA%20SANITARIA%20ANTE%20INCIDENTES%20DE%20MULTIPLES%20VICTIMAS%282014FE0704%2F001%29&javax.portlet.prp_fdd432e522731952a0329d2382300030__forwardPath=%2Fpages%2Fformacion%2FdetalleEdicionResultado.jsp&javax.portlet.prp_fdd432e522731952a0329d2382300030_i18n.http.lang=es&javax.portlet.prp_fdd432e522731952a0329d2382300030__forwardMode=view&javax.portlet.prp_fdd432e522731952a0329d2382300030__forwardContent=text%2Fhtml&javax.portlet.prp_fdd432e522731952a0329d2382300030_vgnextoid=43718b0371b6a210VgnVCM10000078020a0aRCRD&javax.portlet.prp_fdd432e522731952a0329d2382300030__forwardState=&javax.portlet.prp_fdd432e522731952a0329d2382300030__forwardName=success&javax.portlet.begCacheTok=com.vignette.cachetoken&javax.portlet.endCacheTok=com.vignette.cachetoken',
			editable: false
		},
		{
			id: 99,
			title: 'REPETICION',
			allDay: true,
			start: '2014-06-10',
			end: '2014-06-11',
			className: 'modaltrigger',
			description: 'Fecha Inicio Celebracion: 14/10/2013 - Fecha Fin Celebracion: 28/05/2014',
			color: eventsColors[Math.floor(Math.random() * eventsColors.length)],
			url: 'https://www.asturias.es/portal/site/iaap/template.PAGE/menuitem.cb3c676a2d31dc4e24afbc52cd6005a0/?javax.portlet.tpst=fdd432e522731952a0329d2382300030&javax.portlet.prp_fdd432e522731952a0329d2382300030_nivel=INICIACION%20CHINO%20E.O.I%28CES155%29&javax.portlet.prp_fdd432e522731952a0329d2382300030__forwardPath=%2Fpages%2FagendaActividades%2FdetalleActividadResultado.jsp&javax.portlet.prp_fdd432e522731952a0329d2382300030_i18n.http.lang=es&javax.portlet.prp_fdd432e522731952a0329d2382300030__forwardMode=view&javax.portlet.prp_fdd432e522731952a0329d2382300030__forwardContent=text%2Fhtml&javax.portlet.prp_fdd432e522731952a0329d2382300030_claveDiaSeleccionado=14%2F05%2F2014&javax.portlet.prp_fdd432e522731952a0329d2382300030_vgnextoid=43718b0371b6a210VgnVCM10000078020a0aRCRD&javax.portlet.prp_fdd432e522731952a0329d2382300030__forwardState=&javax.portlet.prp_fdd432e522731952a0329d2382300030__forwardName=success&javax.portlet.begCacheTok=com.vignette.cachetoken&javax.portlet.endCacheTok=com.vignette.cachetoken',
			editable: true
		},
		{
			id: 99,
			title: 'REPETICION',
			allDay: true,
			start: '2014-06-17',
			end: '2014-06-18',
			className: 'modaltrigger',
			description: 'Fecha Inicio Celebracion: 14/10/2013 - Fecha Fin Celebracion: 28/05/2014',
			color: eventsColors[Math.floor(Math.random() * eventsColors.length)],
			url: 'https://www.asturias.es/portal/site/iaap/template.PAGE/menuitem.cb3c676a2d31dc4e24afbc52cd6005a0/?javax.portlet.tpst=fdd432e522731952a0329d2382300030&javax.portlet.prp_fdd432e522731952a0329d2382300030_nivel=INICIACION%20CHINO%20E.O.I%28CES155%29&javax.portlet.prp_fdd432e522731952a0329d2382300030__forwardPath=%2Fpages%2FagendaActividades%2FdetalleActividadResultado.jsp&javax.portlet.prp_fdd432e522731952a0329d2382300030_i18n.http.lang=es&javax.portlet.prp_fdd432e522731952a0329d2382300030__forwardMode=view&javax.portlet.prp_fdd432e522731952a0329d2382300030__forwardContent=text%2Fhtml&javax.portlet.prp_fdd432e522731952a0329d2382300030_claveDiaSeleccionado=14%2F05%2F2014&javax.portlet.prp_fdd432e522731952a0329d2382300030_vgnextoid=43718b0371b6a210VgnVCM10000078020a0aRCRD&javax.portlet.prp_fdd432e522731952a0329d2382300030__forwardState=&javax.portlet.prp_fdd432e522731952a0329d2382300030__forwardName=success&javax.portlet.begCacheTok=com.vignette.cachetoken&javax.portlet.endCacheTok=com.vignette.cachetoken',
			editable: true
		}
	]
	// URL para el calendario compartido de google calendar
	gCal = '';
}

$(document).ready(function() {
	
		initGlobalParams();
		initFunctions();
				
		// Referencias a los campos del formualario
		var name = $( "#name" );
		var url = $( "#url" );
		var desc = $( "#comentarios" );
		var inicio = $( "#inicio" );
		var fin = $( "#fin" );
		var color = $( "#color" );
		var edit_event_id = $( "#edit_event_id" );
		allFields = $([]).add( name ).add( desc ).add ( inicio ).add ( fin ). add ( url ).add ( color );
		var date = new Date();
				
		
		// Contruimos el objeto calendario
		var calendar =  $('#calendar').fullCalendar({
					
			//////////////////////////////////////////////////////////////////////
			///  INICIALIZACION DE PARAMETROS DE CONFIGURACION DEL CALENDARIO  ///
			//////////////////////////////////////////////////////////////////////
			eventSources: [
				// eventos del array JSON
		    {   events: json,
				    textColor: 'black' // an option!
				},
				// eventos del calendario de google calendar
		    {		url: gCal, 
		    		className: 'fc-event', 
		    		color: '#3a87ad', 
		    		textColor: 'white' 
		    }
			],
			minTime: '09:00:00', // Inicio para crear evento
			maxTime: '20:00:00', // Fin para crear evento
			weekends: true, // indica si se muestran o no los fines de semana
			// aspectRatio: 2, // indica el radio de aspecto que va a tener el calendario
			slotEventOverlap: true, // variable que indica si los eventos en la vista dia pueden superponerse unos encima de otros o salen en linea
			eventStartEditable: true, // variable que indica si los eventos son arrastrables
			eventDurationEditable: true, // variable que indica si los eventos puede redimensionarse
			scrollTime: '08:00:00', // variable que indica la hora en la que colocar la vista dia por defecto
			theme: true, // le asignamos estilo
			slotDuration: '00:30:00', // definimos que cada evento pueda configurarse cada 15 min
			editable: true, // hacemos el calendario editable en cuanto a mover y arrastras eventos
			firstDay: 1, //  1(Monday) this can be changed to 0(Sunday) for the USA system
			selectable: true, // indica si se pueden crear o no eventos sobre el calendario
			selectHelper: true, // efecto de arrastar sin perder de vista el evento
			defaultView: 'month', // vista por defecto activa
			defaultDate: date, // dia actual
			lang: 'es', // idioma
			weekMode: 'liquid', // indica que la forma de mostrar las semanas pueden ser variabbles
			handleWindowResize: 'true', // cambia el tamaño del calendario con el cambio de tamaño de la ventana
			header: { // configuracion de botones en la cabecera
				left: 'prevYear,prev,next,nextYear,today', // botones configurables en la parte superior izquierda 
				center: 'title', // botones en el centro superior
				right: 'agendaWeek,month,agendaDay' // botones configurables en la parte superior derecha
			},
			//////////////////////////////////////////////////////////////////////////
			///  FIN INICIALIZACION DE PARAMETROS DE CONFIGURACION DEL CALENDARIO  ///
			//////////////////////////////////////////////////////////////////////////

			
			//////////////////////////////////
			///  EVENTOS DEL FULLCALENDAR  ///
			//////////////////////////////////
			dayClick: function(date, jsEvent, view) {
 				return false;
    	},
    	
    	dayRender: function( date, cell) {
    		return false;
    	},
			
			eventClick: function(calEvent, jsEvent, view) {
      	if (calEvent.source.dataType != 'gcal') {
      		if (calEvent.editable) {
	      		// Seteamos en los campos de formulario de edicion los valores del evento
		      	edit_event_id.val(calEvent.id);
		      	name.val(calEvent.title);
		      	url.val(calEvent.url);
		      	desc.val(calEvent.description);
		      	color.val(calEvent.color);
		      	if (calEvent.allDay) {
		      		ocultarCamposFecha();
		      	} else {
		      		if (calEvent.start != null && calEvent.start != '') {
			      		inicio.val(calEvent.start.format("DD/MM/YYYY HH:mm"));
			      	}
			      	if (calEvent.end != null && calEvent.end != '') {
			      		fin.val(calEvent.end.format("DD/MM/YYYY HH:mm"));
			      	}
		      		mostrarCamposFecha();
		      	}
		      	
		      	// Asociamos al textarea el editor de texto personalizado
		      	$("#comentarios").ClassyEdit();
		      	
		      	// Si el evento no tiene url lo editamos, sino dejamos que siga al enlace
		      	if (url.val() != null && url.val() != '' ) {
		      		if (!confirm("Navegar al enlace asociado?")) {
			      		$("#dialog-form").dialog({
							      autoOpen: false,
							      height: heightModalForm,
							      width: widthModalForm,
							      modal: true,
							      buttons: {
						      	"Eliminar": function() {
			                var event_id = $("#edit_event_id").val();
			                var name = $( "#name" ).val();
			                if (confirm("Desea eliminar el evento "+name+"?")) {
			                	// Actualizamos el registro en base de datos
				                // $.ajax({type:"POST",url: "delete_class.java",data: "event_id=" + event_id,});
			                	$('#calendar').fullCalendar('removeEvents',event_id);
			                	eliminarEditorTexto()
			                }
			                cerrarDialogoModal();
			            	},
			            	"Actualizar": function() {
			            		var bValid = true;
						          allFields.removeClass( "ui-state-error" );
						          
						          // Validamos la longitud de los campos
						          bValid = bValid && checkLength( name, "titulo", 3, 60 );
						          if (url.val() != '') { bValid = bValid && checkLength( url, "url", 6, 8000 );}
						          bValid = bValid && checkLength( desc, "comentarios", 0, 250 );
						          
						  				// Validamos las expresiones regulares
						          if (url.val() != '') {bValid = bValid && checkRegexp( url, /(((http|ftp|https):\/{2})+(([0-9a-z_-]+\.)+(aero|asia|biz|cat|com|coop|edu|gov|info|int|jobs|mil|mobi|museum|name|net|org|pro|tel|travel|ac|ad|ae|af|ag|ai|al|am|an|ao|aq|ar|as|at|au|aw|ax|az|ba|bb|bd|be|bf|bg|bh|bi|bj|bm|bn|bo|br|bs|bt|bv|bw|by|bz|ca|cc|cd|cf|cg|ch|ci|ck|cl|cm|cn|co|cr|cu|cv|cx|cy|cz|cz|de|dj|dk|dm|do|dz|ec|ee|eg|er|es|et|eu|fi|fj|fk|fm|fo|fr|ga|gb|gd|ge|gf|gg|gh|gi|gl|gm|gn|gp|gq|gr|gs|gt|gu|gw|gy|hk|hm|hn|hr|ht|hu|id|ie|il|im|in|io|iq|ir|is|it|je|jm|jo|jp|ke|kg|kh|ki|km|kn|kp|kr|kw|ky|kz|la|lb|lc|li|lk|lr|ls|lt|lu|lv|ly|ma|mc|md|me|mg|mh|mk|ml|mn|mn|mo|mp|mr|ms|mt|mu|mv|mw|mx|my|mz|na|nc|ne|nf|ng|ni|nl|no|np|nr|nu|nz|nom|pa|pe|pf|pg|ph|pk|pl|pm|pn|pr|ps|pt|pw|py|qa|re|ra|rs|ru|rw|sa|sb|sc|sd|se|sg|sh|si|sj|sj|sk|sl|sm|sn|so|sr|st|su|sv|sy|sz|tc|td|tf|tg|th|tj|tk|tl|tm|tn|to|tp|tr|tt|tv|tw|tz|ua|ug|uk|us|uy|uz|va|vc|ve|vg|vi|vn|vu|wf|ws|ye|yt|yu|za|zm|zw|arpa)(:[0-9]+)?((\/([~0-9a-zA-Z\#\+\%@\.\/_-]+))?(\?[0-9a-zA-Z\+\%@\/&\[\];=_-]+)?)?))\b/i, "ej. http://www.google.com" );}
						          						          			
						          if ( bValid ) {
			            			calEvent.title = name.val();
			            			calEvent.url = url.val();
			            			calEvent.description = desc.val();
			            			if (!calEvent.allDay) {
			            				if (inicio.val() != null && inicio.val() != '') {
				            				calEvent.start = $.fullCalendar.moment(new Date(formatDate(inicio.val())));
				            			}
				            			if (fin.val() != null && fin.val() != '') {
				            				calEvent.end = $.fullCalendar.moment(new Date(formatDate(fin.val())));
				            			}	
			            			}         			
			            			// Actualizamos el registro en base de datos
				                // $.ajax({type:"POST",url: "delete_class.java",data: "event_id=" + event_id + "name=" + name + "url=" + url + "description=" + desc});
												$('#calendar').fullCalendar('updateEvent',calEvent);
												eliminarAvisos()
												eliminarEditorTexto()
					            	cerrarDialogoModal();
					            }
			            	},
			            	"Cancelar": function() {
							      		eliminarAvisos()
							      		$( ".validateTips" ).text( 'Los campos marcados con * son obligatorios.' )
							      		eliminarEditorTexto()
							          cerrarDialogoModal();
							        }
				            }
			          });
							  abrirDialogoModal();
							  return false;	
							}
						} else {
							$("#dialog-form").dialog({
							      autoOpen: false,
							      height: heightModalForm,
							      width: widthModalForm,
							      modal: true,
							      open: function(event, ui) { 
									    // Oculta el boton de cerrar ventana
									    $(this).parent().children().children('.ui-dialog-titlebar-close').hide();
										},
							      buttons: {
						      	"Eliminar": function() {
			                var event_id = $("#edit_event_id").val();
			                var name = $( "#name" ).val();
			                if (confirm("Desea eliminar el evento "+name+"?")) {
			                	// Actualizamos el registro en base de datos
				                // $.ajax({type:"POST",url: "delete_class.java",data: "event_id=" + event_id});
			                	$('#calendar').fullCalendar('removeEvents',event_id); // Eliminamos el evento concreto
			                	eliminarEditorTexto()
			                }
			                eliminarAvisos();
			                cerrarDialogoModal();
			            	},
			            	"Actualizar": function() {
			            		var bValid = true;
						          
						          // Validamos la longitud de los campos
						          bValid = bValid && checkLength( name, "nombre", 10, 200);
											bValid = bValid && checkLength( desc, "comentarios", 0, 300 );
						          if (url.val() != '') {
						          	bValid = bValid && checkLength( url, "url", 6, 80000 );
						          }
						          						          
						  				// Validamos las expresiones regulares
						          if (url.val() != '') {
						          	bValid = bValid && checkRegexp( url, /(((http|ftp|https):\/{2})+(([0-9a-z_-]+\.)+(aero|asia|biz|cat|com|coop|edu|gov|info|int|jobs|mil|mobi|museum|name|net|org|pro|tel|travel|ac|ad|ae|af|ag|ai|al|am|an|ao|aq|ar|as|at|au|aw|ax|az|ba|bb|bd|be|bf|bg|bh|bi|bj|bm|bn|bo|br|bs|bt|bv|bw|by|bz|ca|cc|cd|cf|cg|ch|ci|ck|cl|cm|cn|co|cr|cu|cv|cx|cy|cz|cz|de|dj|dk|dm|do|dz|ec|ee|eg|er|es|et|eu|fi|fj|fk|fm|fo|fr|ga|gb|gd|ge|gf|gg|gh|gi|gl|gm|gn|gp|gq|gr|gs|gt|gu|gw|gy|hk|hm|hn|hr|ht|hu|id|ie|il|im|in|io|iq|ir|is|it|je|jm|jo|jp|ke|kg|kh|ki|km|kn|kp|kr|kw|ky|kz|la|lb|lc|li|lk|lr|ls|lt|lu|lv|ly|ma|mc|md|me|mg|mh|mk|ml|mn|mn|mo|mp|mr|ms|mt|mu|mv|mw|mx|my|mz|na|nc|ne|nf|ng|ni|nl|no|np|nr|nu|nz|nom|pa|pe|pf|pg|ph|pk|pl|pm|pn|pr|ps|pt|pw|py|qa|re|ra|rs|ru|rw|sa|sb|sc|sd|se|sg|sh|si|sj|sj|sk|sl|sm|sn|so|sr|st|su|sv|sy|sz|tc|td|tf|tg|th|tj|tk|tl|tm|tn|to|tp|tr|tt|tv|tw|tz|ua|ug|uk|us|uy|uz|va|vc|ve|vg|vi|vn|vu|wf|ws|ye|yt|yu|za|zm|zw|arpa)(:[0-9]+)?((\/([~0-9a-zA-Z\#\+\%@\.\/_-]+))?(\?[0-9a-zA-Z\+\%@\/&\[\];=_-]+)?)?))\b/i, "ej. http://www.google.com" );
						          }
						          		
						          if ( bValid ) {
			            			calEvent.title = name.val();
			            			calEvent.url = url.val();
			            			calEvent.description = desc.val();
			            			calEvent.color = color.val();
			            			if (inicio.val() != null && inicio.val() != '') {
			            				calEvent.start = $.fullCalendar.moment(new Date(formatDate(inicio.val())));
			            			}
			            			if (fin.val() != null && fin.val() != '') {
			            				calEvent.end = $.fullCalendar.moment(new Date(formatDate(fin.val())));
			            			}
			            			// Actualizamos el registro en base de datos
				                // $.ajax({type:"POST",url: "delete_class.java",data: "event_id=" + event_id + "name=" + name + "url=" + url + "description=" + desc});
												$('#calendar').fullCalendar('updateEvent',calEvent);
												eliminarAvisos();
												eliminarEditorTexto();
					            	cerrarDialogoModal();
					            }
			            	},
			            	"Cancelar": function() {
							      		$( ".validateTips" ).text( 'Los campos marcados con * son obligatorios.' )
							      		eliminarAvisos();							      		
							      		eliminarEditorTexto();
							          cerrarDialogoModal();
							        }
				            }
			          });
							  abrirDialogoModal();
							  /*eliminarEditorTexto();
							  return false;	*/
						}						
			    } else {
			    	alert('No tiene permisos para editar el evento');
			    	return false;
			    }
		    } else {
		    	 window.open(calEvent.url);
           return false;
		    }
    	},
    	eventRender: function(event, element) {
					showQtipHelp(event, element);
			},
      eventMouseover: function(calEvent, jsEvent) {
    		//alert('eventMouseover');
      },
      eventMouseout: function(calEvent, jsEvent) {
      	//alert('eventMouseout');  
      },
			eventResize: function(event, revertFunc) {
        /*if (!confirm("Confirma el cambio?")) {
            revertFunc();
        } else {
        	// Actualizamos el registro en base de datos
          /*$.ajax({
              type:"POST",
              url: "update_class.java",
              data: "event_id=" + event.id + "inicio=" + event.start.format() + "fin=" + event.end.format()
          });*/
        /*}	*/
    	},
    	eventDrop: function(event, revertFunc) {
    		/*if (!confirm("Confirma el cambio?")) {
            revertFunc();
        } else {
        	// Actualizamos el registro en base de datos
          /*$.ajax({
              type:"POST",
              url: "update_class.java",
              data: "event_id=" + event.id + "inicio=" + event.start.format() + "fin=" + event.end.format()
          });*/
        /*}*/
    	},
			select: function(start, end, jsEvent, view) { // funcion que se llama cuando se hace select en un evento
				// Asociamos al textarea el editor de texto y seteamos el valor por defecto del combo de tipo
      	$("#comentarios").ClassyEdit();
      	      	
      	// Comprobamos si la fecha es de dia completo o no
      	if (!start.hasTime() && !end.hasTime()) {
      		ocultarCamposFecha();
      	} else{
      		mostrarCamposFecha();
      	}
      	if (start != null && start != '') {
      		inicio.val(start.format("DD/MM/YYYY HH:mm"));
      	}
      	if (end != null && end != '') {
      		fin.val(end.format("DD/MM/YYYY HH:mm"));
      	}	 
      	
				$("#dialog-form").dialog({
			      autoOpen: false,
			      height: heightModalForm,
			      width: widthModalForm,
			      modal: true,
			      open: function(event, ui) { 
					    //hide close button.
					    $(this).parent().children().children('.ui-dialog-titlebar-close').hide();
						},
			      buttons: {
			      	"Crear Evento": function() {
			        	var bValid = true;
			          allFields.removeClass( "ui-state-error" );
			          
			          // Validamos la longitud de los campos
			          bValid = bValid && checkLength( name, "nombre", 10, 200 );
			          bValid = bValid && checkLength( desc, "comentarios", 0, 300 );
			          if (url.val() != '') {
			          	bValid = bValid && checkLength( url, "url", 6, 80 );
			          }
			          
			  				// Validamos las expresiones regulares
			          if (url.val() != '') {
			          	bValid = bValid && checkRegexp( url, /(((http|ftp|https):\/{2})+(([0-9a-z_-]+\.)+(aero|asia|biz|cat|com|coop|edu|gov|info|int|jobs|mil|mobi|museum|name|net|org|pro|tel|travel|ac|ad|ae|af|ag|ai|al|am|an|ao|aq|ar|as|at|au|aw|ax|az|ba|bb|bd|be|bf|bg|bh|bi|bj|bm|bn|bo|br|bs|bt|bv|bw|by|bz|ca|cc|cd|cf|cg|ch|ci|ck|cl|cm|cn|co|cr|cu|cv|cx|cy|cz|cz|de|dj|dk|dm|do|dz|ec|ee|eg|er|es|et|eu|fi|fj|fk|fm|fo|fr|ga|gb|gd|ge|gf|gg|gh|gi|gl|gm|gn|gp|gq|gr|gs|gt|gu|gw|gy|hk|hm|hn|hr|ht|hu|id|ie|il|im|in|io|iq|ir|is|it|je|jm|jo|jp|ke|kg|kh|ki|km|kn|kp|kr|kw|ky|kz|la|lb|lc|li|lk|lr|ls|lt|lu|lv|ly|ma|mc|md|me|mg|mh|mk|ml|mn|mn|mo|mp|mr|ms|mt|mu|mv|mw|mx|my|mz|na|nc|ne|nf|ng|ni|nl|no|np|nr|nu|nz|nom|pa|pe|pf|pg|ph|pk|pl|pm|pn|pr|ps|pt|pw|py|qa|re|ra|rs|ru|rw|sa|sb|sc|sd|se|sg|sh|si|sj|sj|sk|sl|sm|sn|so|sr|st|su|sv|sy|sz|tc|td|tf|tg|th|tj|tk|tl|tm|tn|to|tp|tr|tt|tv|tw|tz|ua|ug|uk|us|uy|uz|va|vc|ve|vg|vi|vn|vu|wf|ws|ye|yt|yu|za|zm|zw|arpa)(:[0-9]+)?((\/([~0-9a-zA-Z\#\+\%@\.\/_-]+))?(\?[0-9a-zA-Z\+\%@\/&\[\];=_-]+)?)?))\b/i, "ej. http://www.google.com" );
			          }
			          			          			
			          if ( bValid ) {
			          	if (!start.hasTime() && !end.hasTime()) {
										start = start;
										end = end;
									} else {
										start =  $.fullCalendar.moment(new Date(formatDate(inicio.val()))).add("hours", 2);
										end =  $.fullCalendar.moment(new Date(formatDate(fin.val()))).add("hours", 2);
									}
			          	var eventData;
			            eventData = {
										id: Math.floor(Math.random() * 99999999999),
										title: name.val(),
										url: url.val(),
										start: start,
										end: end,
										description: desc.val(),
										color: 'green',
										start: start,
										end: end,
										color: color.val(),										
										editable: true
									};
									$('#calendar').fullCalendar('renderEvent', eventData, true); // renderizamos en el calendario el nuevo evento
									eliminarAvisos() // borramos cualquier aviso de error de validacion que pueda quedar
									json.push( eventData ); // añadimos el nuevo item al array inicial para no tener que actualzar el calendario
									eliminarEditorTexto() // Eliminamos el editor de texto
			            cerrarDialogoModal(); // Cerramos el cuadro de dialogo
			          }
			        },
			      "Cancelar": function() {
			      		eliminarAvisos() // borramos cualquier aviso de error de validacion que pueda quedar
			      		$( ".validateTips" ).text( 'Los campos marcados con * son obligatorios.' );
			      		eliminarEditorTexto();
			          cerrarDialogoModal();
			        }
			      },
			      close: function() {
			      	$( ".validateTips" ).text( 'Los campos marcados con * son obligatorios.' );
			      	eliminarAvisos();			      	
			      	eliminarEditorTexto();
			      },
			      open: function() {
			      	// operaciones a realizar el abrir el formulario de creacion
			      }
			    });
			    abrirDialogoModal(); 
					$('#calendar').fullCalendar('unselect');
			}
			/////////////////////////////////////
			/// FIN EVENTOS DEL FULLCALENDAR  ///
			/////////////////////////////////////
		}); // fin fullcalendar
		
	});
	
	

	/////////////////////////////////////
	///////////// FUNCIONES /////////////
	/////////////////////////////////////

	// alida la longitud del campo
	function checkLength( o, n, min, max ) {
      if ( o.val().length > max || o.val().length < min ) {
        o.addClass( "ui-state-error" );
        updateTips( "La longitud de " + n + " debe estar entre " +
          min + " y " + max + " caracteres." );
        return false;
      } else {
        return true;
      }
    }
 		
 		// Valida las expresiones regulares
    function checkRegexp( o, regexp, n ) {
      if ( !( regexp.test( o.val() ) ) ) {
        o.addClass( "ui-state-error" );
        updateTips( n );
        return false;
      } else {
        return true;
      }
    }
    
    // Actualiza los mensajes de error de las validaciones
    function updateTips( t ) {
      $( ".validateTips" ).text( t ).addClass( "ui-state-highlight" );
      setTimeout(function() {
        $( ".validateTips" ).removeClass( "ui-state-highlight", 1500 );
      }, 500 );
    }
    
    // Formatea un string del tipo '21/02/2014 08:00' a formato '2014-21-02 08:00'
    function formatDate (fecha) {
    	diaHora = fecha.split(" ");
    	if (diaHora.length = 2) {
    		fecha = diaHora[0];
    		hora = diaHora[1];
    		if (fecha.length == 10) {
    			cadena = fecha.split("/");
    			if (cadena.length = 3) {
    				return new Date(cadena[2]+"-"+cadena[1]+"-"+cadena[0]+" "+hora);
    			}
    		}
    	}
    }
    
    // Muestra los campos de fecha en el formulario
    function mostrarCamposFecha() {
    	$( ".inicio" ).show();
      $( ".fin" ).show();
    }
    
    // Oculta los campos de fecha en el formulario
    function ocultarCamposFecha() {
    	$( ".inicio" ).hide();
      $( ".fin" ).hide();
    }
    
    // Inicializa las funciones necesarias para el correcto funcionamiento
    function initFunctions() {
    	// Datetimepicker para la modificacion de la fecha y la hora de los eventos
			$('#inicio').datetimepicker({
				onGenerate:function( ct ){
			    jQuery(this).find('.xdsoft_date.xdsoft_weekend').addClass('xdsoft_disabled');
			  },
				lang:'es',
				format:'d/m/Y H:i',
				step:30,
				dayOfWeekStart:1,
				minDate:0,
				minTime:'08:00',
				maxTime:'20:15'
				/*onShow:function( ct ){ // Rango de fechas
			   this.setOptions({
			    maxDate:jQuery('#fin').val()?jQuery('#fin').val():false
			   })
			 	}*/
			});
			$('#fin').datetimepicker({
				onGenerate:function( ct ){
			    jQuery(this).find('.xdsoft_date.xdsoft_weekend').addClass('xdsoft_disabled');
			  },
				lang:'es',
				format:'d/m/Y H:i',
				step:30,
				dayOfWeekStart:1,
				minDate:0,
				minTime:'08:00',
				maxTime:'20:15'
				/*onShow:function( ct ){ // Rango de fechas
			   this.setOptions({
			    minDate:jQuery('#inicio').val()?jQuery('#inicio').val():false
			   })
			 	}*/
			});
			
    }
    
    // Muestra la informacion del evento en un popup informativo
    function showQtipHelp (event, element) {
    	$(element).qtip({
	         content: {
	            title: { text: event.title },
	            text: function() {
	            		var text;
	              	if (event.allDay) {
	              		format = 'LL';
	              	} else {
	              		format = 'LLL';
	              	}
	              	if (event.start != null) { text = '<br><span class="inicio" style="font-weight:bold;">Inicio: </span>' + event.start.format(format); }
	            		if (event.end != null) { text+=	'<br><span class="fin" style="font-weight:bold;">Fin: </span>' + event.end.format(format); }
	            		if (event.description != undefined && event.description != '') {
	                	text+=	'<br><span class="descripcion" style="font-weight:bold;">Descripci&oacute;n: </span>' + event.description;
	                }
	                if (event.location != undefined && event.location != '') {
	                	text+=	'<br><span class="lugar" style="font-weight:bold;">Lugar: </span>' + event.location;
	                }
	                return text;
	              }
	        	},
	         	position: {
	            target: 'mouse', // Track the mouse as the positioning target
	            adjust: { x: 15, y: 40 }
	          },
	          show: {
	              solo: true, effect: { type: 'slide' }, effect: function () {
	                  $(this).fadeTo(500, 1);
	              }
	          },
	          hide: { when: 'mouseout', fixed: true },
	          style: {
	              tip: true, // Give it a speech bubble tip
	              border: {
	                  width: 2,
	                  radius: 500,
	                  color: '#474968'
	
	              },
	              title: {
	                  color: '#000',
	                  background: '#9193c4'
	              }
	          }
	     });
    } 
    
    // elimina cualquier aviso de validacion del popup modal
    function eliminarAvisos() {
    	allFields.val("").removeClass( "ui-state-error" );
    }
    
    // elimina el editor de texto del formulario modal
    function eliminarEditorTexto () {
    	$(".classyedit").remove();
    }
    
    // Abrir el popup modal
    function abrirDialogoModal() {
    	$("#dialog-form").dialog('open');
    }
    
    // Cierra el popup modal
    function cerrarDialogoModal() {
    	$("#dialog-form").dialog('close');
    }
    /////////////////////////////////////
		/////////// FIN FUNCIONES ///////////
		/////////////////////////////////////