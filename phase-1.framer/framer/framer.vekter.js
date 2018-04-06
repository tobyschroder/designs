(function(scope) {var __layer_0__ = new Layer({"name":"share","backgroundColor":"rgba(255,255,255,1)","width":320,"height":568,"constraintValues":{"height":568,"heightFactor":1,"width":320,"widthFactor":1},"blending":"normal","clip":true,"borderStyle":"solid"});var page_content = new Layer({"parent":__layer_0__,"name":"page_content","backgroundColor":null,"width":320,"height":552,"constraintValues":{"height":552,"centerAnchorX":0.5,"width":320,"bottom":16,"right":0,"centerAnchorY":0.4859154929577465},"blending":"normal","clip":false,"borderStyle":"solid"});var page_email = new Layer({"parent":page_content,"name":"page_email","backgroundColor":null,"width":320,"height":552,"constraintValues":{"height":552,"centerAnchorX":0.5,"width":320,"bottom":0,"right":0,"centerAnchorY":0.5},"blending":"normal","clip":false,"borderStyle":"solid"});var outside = new Layer({"parent":page_email,"name":"outside","backgroundColor":null,"width":320,"height":552,"constraintValues":{"height":552,"centerAnchorX":0.5,"width":320,"bottom":0,"right":0,"centerAnchorY":0.5},"blending":"normal","clip":false,"borderStyle":"solid"});var __layer_1__ = new SVGLayer({"parent":outside,"name":".SVGLayer","backgroundColor":"#d8dfe3","width":320,"strokeWidth":1,"htmlIntrinsicSize":{"height":1,"width":320},"rotation":null,"height":1,"fill":"#d8dfe3","opacity":null,"y":45,"svg":"<svg xmlns=\"http:\/\/www.w3.org\/2000\/svg\" width=\"320\" height=\"1\"><path d=\"M 0 0 L 320 0 L 320 1 L 0 1 Z\" name=\"Rectangle\"><\/path><\/svg>"});var __layer_2__ = new TextLayer({"parent":outside,"backgroundColor":null,"width":150,"x":16,"styledText":{"blocks":[{"inlineStyles":[{"css":{"fontSize":"24px","WebkitTextFillColor":"#052530","whiteSpace":"pre","fontWeight":700,"letterSpacing":"0px","tabSize":4,"fontFamily":"\"ProximaNova-Bold\", \"Proxima Nova\", serif","lineHeight":"1.2"},"startIndex":0,"endIndex":15}],"text":"Email this trip"}],"alignment":"left"},"height":28,"constraintValues":{"left":16,"height":28,"centerAnchorX":0.28437499999999999,"width":150,"top":122,"centerAnchorY":0.24637681159420291},"blending":"normal","autoSize":true,"y":122});var __layer_3__ = new TextLayer({"parent":outside,"backgroundColor":null,"width":270,"x":16,"styledText":{"blocks":[{"inlineStyles":[{"startIndex":0,"endIndex":38,"css":{"fontSize":"16px","WebkitTextFillColor":"hsla(195, 81%, 10%, 0.8)","whiteSpace":"pre","fontWeight":400,"letterSpacing":"0px","tabSize":4,"fontFamily":"\"ProximaNova-Regular\", \"Proxima Nova\", serif","lineHeight":"1.5"}}],"text":"Send a beautifully formated email with"},{"inlineStyles":[{"startIndex":0,"endIndex":41,"css":{"fontSize":"16px","WebkitTextFillColor":"hsla(195, 81%, 10%, 0.8)","whiteSpace":"pre","fontWeight":400,"letterSpacing":"0px","tabSize":4,"fontFamily":"\"ProximaNova-Regular\", \"Proxima Nova\", serif","lineHeight":"1.5"}}],"text":"details explaining how to view this trip."}],"alignment":"left"},"height":48,"constraintValues":{"left":null,"height":48,"centerAnchorX":0.47187499999999999,"width":270,"top":158,"centerAnchorY":0.32971014492753625},"blending":"normal","autoSize":true,"y":158});var __layer_4__ = new SVGLayer({"parent":outside,"name":".SVGLayer","backgroundColor":null,"width":288,"stroke":"#d8dfe3","strokeWidth":1,"x":16,"htmlIntrinsicSize":{"height":170,"width":288},"rotation":null,"height":170,"borderRadius":4,"opacity":null,"y":278,"svg":"<svg xmlns=\"http:\/\/www.w3.org\/2000\/svg\" width=\"288\" height=\"170\"><path d=\"M 0 4 C 0 1.791 1.791 0 4 0 L 284 0 C 286.209 0 288 1.791 288 4 L 288 166 C 288 168.209 286.209 170 284 170 L 4 170 C 1.791 170 0 168.209 0 166 Z\" fill=\"transparent\" name=\"Rectangle\"><\/path><\/svg>"});var __layer_5__ = new TextLayer({"parent":outside,"backgroundColor":null,"width":182,"x":24,"styledText":{"blocks":[{"inlineStyles":[{"css":{"fontSize":"16px","WebkitTextFillColor":"hsla(202, 100%, 64%, 0.3)","whiteSpace":"pre","fontWeight":400,"letterSpacing":"0px","tabSize":4,"fontFamily":"\"ProximaNova-Regular\", \"Proxima Nova\", serif","lineHeight":"1.5"},"startIndex":0,"endIndex":24}],"text":"Type a custom message..."}]},"height":24,"constraintValues":{"left":24,"height":24,"centerAnchorX":0.359375,"width":182,"bottom":242,"top":null,"centerAnchorY":0.53985507246376807},"blending":"normal","autoSize":true,"y":286});var __layer_6__ = new Layer({"parent":outside,"name":"send button","backgroundColor":null,"width":288,"x":16,"height":40,"constraintValues":{"left":16,"height":40,"centerAnchorX":0.5,"width":288,"bottom":48,"right":16,"top":null,"centerAnchorY":0.87681159420289856},"blending":"normal","clip":false,"borderStyle":"solid","y":464});var __layer_7__ = new SVGLayer({"parent":__layer_6__,"name":".SVGLayer","backgroundColor":"rgba(70, 187, 255, 1.00)","width":288,"strokeWidth":1,"htmlIntrinsicSize":{"height":40,"width":288},"rotation":null,"height":40,"fill":"rgba(70, 187, 255, 1.00)","borderRadius":4,"opacity":null,"svg":"<svg xmlns=\"http:\/\/www.w3.org\/2000\/svg\" width=\"288\" height=\"40\"><path d=\"M 0 4 C 0 1.791 1.791 0 4 0 L 284 0 C 286.209 0 288 1.791 288 4 L 288 36 C 288 38.209 286.209 40 284 40 L 4 40 C 1.791 40 0 38.209 0 36 Z\" name=\"Rectangle\"><\/path><\/svg>"});var __layer_8__ = new TextLayer({"parent":__layer_6__,"backgroundColor":null,"width":80,"x":104,"styledText":{"blocks":[{"inlineStyles":[{"css":{"fontSize":"16px","WebkitTextFillColor":"hsl(0, 0%, 100%)","whiteSpace":"pre","fontWeight":400,"letterSpacing":"0px","tabSize":4,"fontFamily":"\"ProximaNova-Regular\", \"Proxima Nova\", serif","lineHeight":"1.5"},"startIndex":0,"endIndex":10}],"text":"Send Email"}],"alignment":"center"},"height":24,"constraintValues":{"left":null,"height":24,"centerAnchorX":0.5,"width":80,"top":null,"centerAnchorY":0.5},"blending":"normal","autoSize":true,"y":8});var __layer_9__ = new Layer({"parent":outside,"name":"send to yourself button","backgroundColor":null,"width":288,"x":16,"height":40,"constraintValues":{"left":16,"height":40,"centerAnchorX":0.5,"width":288,"bottom":0,"right":16,"top":null,"centerAnchorY":0.96376811594202894},"blending":"normal","clip":false,"borderStyle":"solid","y":512});var __layer_10__ = new SVGLayer({"parent":__layer_9__,"name":".SVGLayer","backgroundColor":"#f3f6f6","width":288,"strokeWidth":1,"htmlIntrinsicSize":{"height":40,"width":288},"rotation":null,"height":40,"fill":"#f3f6f6","borderRadius":4,"opacity":null,"svg":"<svg xmlns=\"http:\/\/www.w3.org\/2000\/svg\" width=\"288\" height=\"40\"><path d=\"M 0 4 C 0 1.791 1.791 0 4 0 L 284 0 C 286.209 0 288 1.791 288 4 L 288 36 C 288 38.209 286.209 40 284 40 L 4 40 C 1.791 40 0 38.209 0 36 Z\" name=\"Rectangle\"><\/path><\/svg>"});var __layer_11__ = new TextLayer({"parent":__layer_9__,"backgroundColor":null,"width":116,"x":87,"styledText":{"blocks":[{"inlineStyles":[{"css":{"fontSize":"16px","WebkitTextFillColor":"rgba(125, 150, 163, 1.00)","whiteSpace":"pre","fontWeight":400,"letterSpacing":"0px","tabSize":4,"fontFamily":"\"ProximaNova-Regular\", \"Proxima Nova\", serif","lineHeight":"1.5"},"startIndex":0,"endIndex":16}],"text":"Send to Yourself"}],"alignment":"center"},"height":24,"constraintValues":{"left":null,"height":24,"centerAnchorX":0.50347222222222221,"width":116,"top":null,"centerAnchorY":0.5},"blending":"normal","autoSize":true,"y":8});var to_field = new Layer({"parent":page_email,"name":"to_field","backgroundColor":null,"width":288,"x":16,"height":40,"constraintValues":{"left":16,"height":40,"centerAnchorX":0.5,"width":288,"right":16,"top":230,"centerAnchorY":0.45289855072463769},"blending":"normal","clip":false,"borderStyle":"solid","y":230});var __layer_12__ = new SVGLayer({"parent":to_field,"name":".SVGLayer","backgroundColor":null,"width":288,"stroke":"#d8dfe3","strokeWidth":1,"htmlIntrinsicSize":{"height":40,"width":288},"rotation":null,"height":40,"borderRadius":4,"opacity":null,"svg":"<svg xmlns=\"http:\/\/www.w3.org\/2000\/svg\" width=\"288\" height=\"40\"><path d=\"M 0 4 C 0 1.791 1.791 0 4 0 L 284 0 C 286.209 0 288 1.791 288 4 L 288 36 C 288 38.209 286.209 40 284 40 L 4 40 C 1.791 40 0 38.209 0 36 Z\" id=\"id_ABuH7yjN0\" fill=\"transparent\" stroke=\"#d8dfe3\" name=\"background\"><\/path><\/svg>"});var background;if(__layer_12__.elements !== undefined){background = __layer_12__.elements["id_ABuH7yjN0"];
};var text = new TextLayer({"parent":to_field,"name":"text","backgroundColor":null,"width":166,"x":36,"styledText":{"blocks":[{"inlineStyles":[{"css":{"fontSize":"16px","WebkitTextFillColor":"hsla(202, 100%, 64%, 0.3)","whiteSpace":"pre","fontWeight":400,"letterSpacing":"0px","tabSize":4,"fontFamily":"\"ProximaNova-Regular\", \"Proxima Nova\", serif","lineHeight":"1.5"},"startIndex":0,"endIndex":21}],"text":"Name or Email Address"}]},"height":24,"constraintValues":{"left":36,"height":24,"centerAnchorX":0.41319444444444442,"width":166,"top":null,"centerAnchorY":0.5},"blending":"normal","autoSize":true,"y":8});var __layer_13__ = new TextLayer({"parent":to_field,"backgroundColor":null,"width":22,"x":8,"styledText":{"blocks":[{"inlineStyles":[{"css":{"fontSize":"16px","WebkitTextFillColor":"#d8dfe3","whiteSpace":"pre","fontWeight":400,"letterSpacing":"0px","tabSize":4,"fontFamily":"\"ProximaNova-Regular\", \"Proxima Nova\", serif","lineHeight":"1.5"},"startIndex":0,"endIndex":3}],"text":"To:"}]},"height":24,"constraintValues":{"left":8,"height":24,"centerAnchorX":0.065972222222222224,"width":22,"top":null,"centerAnchorY":0.5},"blending":"normal","autoSize":true,"y":8});var to_list = new Layer({"parent":page_email,"name":"to_list","backgroundColor":null,"width":290,"x":15,"height":96,"constraintValues":{"left":15,"height":96,"centerAnchorX":0.5,"width":290,"bottom":184,"right":15,"top":null,"centerAnchorY":0.57971014492753625},"blending":"normal","clip":false,"borderStyle":"solid","y":272});var __layer_14__ = new SVGLayer({"parent":to_list,"name":".SVGLayer","backgroundColor":"hsl(0, 0%, 100%)","width":290,"strokeWidth":1,"htmlIntrinsicSize":{"height":96,"width":290},"rotation":null,"height":96,"fill":"hsl(0, 0%, 100%)","borderRadius":4,"opacity":null,"svg":"<svg xmlns=\"http:\/\/www.w3.org\/2000\/svg\" xmlns:xlink=\"http:\/\/www.w3.org\/1999\/xlink\" width=\"290\" height=\"96\"><g><defs><path d=\"M 0 4 C 0 1.791 1.791 0 4 0 L 286 0 C 288.209 0 290 1.791 290 4 L 290 92 C 290 94.209 288.209 96 286 96 L 4 96 C 1.791 96 0 94.209 0 92 Z\" id=\"shape_id_I10YQlnQI\"><\/path><filter x=\"-4.3%\" y=\"-15.2%\" width=\"108.7%\" height=\"130.3%\" filterUnits=\"objectBoundingBox\" id=\"shape_id_I10YQlnQI_shadow_out\"><feOffset dx=\"0\" dy=\"2\" in=\"SourceAlpha\" result=\"shape_id_I10YQlnQI_outer_shadow0offset\"><\/feOffset><feGaussianBlur stdDeviation=\"3\" in=\"shape_id_I10YQlnQI_outer_shadow0offset\" result=\"shape_id_I10YQlnQI_outer_shadow0blur\"><\/feGaussianBlur><feColorMatrix color-interpolation-filters=\"sRGB\" values=\"0 0 0 0 0.02   0 0 0 0 0.141   0 0 0 0 0.18  0 0 0 0.12 0\" type=\"matrix\" in=\"shape_id_I10YQlnQI_outer_shadow0blur\" result=\"shape_id_I10YQlnQI_outer_shadow0matrix\"><\/feColorMatrix><\/filter><\/defs><g filter=\"url(#shape_id_I10YQlnQI_shadow_out)\"><use fill=\"black\" fill-opacity=\"1\" stroke=\"black\" stroke-opacity=\"0\" stroke-width=\"0\" xlink:href=\"#shape_id_I10YQlnQI\"><\/use><\/g><use xlink:href=\"#shape_id_I10YQlnQI\" name=\"Rectangle\"><\/use><\/g><\/svg>"});var to_list_content = new Layer({"parent":to_list,"name":"to_list_content","backgroundColor":null,"width":123,"x":16,"height":64,"constraintValues":{"left":16,"height":64,"centerAnchorX":0.26724137931034481,"width":123,"bottom":16,"top":16,"centerAnchorY":0.5},"blending":"normal","clip":false,"borderStyle":"solid","y":16});var item_2 = new Layer({"parent":to_list_content,"name":"item_2","backgroundColor":null,"width":126,"x":-6,"height":24,"constraintValues":{"left":-6,"height":24,"centerAnchorX":0.46341463414634149,"width":126,"bottom":0,"right":3,"top":null,"centerAnchorY":0.8125},"blending":"normal","clip":false,"borderStyle":"solid","y":40});var __layer_15__ = new SVGLayer({"parent":item_2,"backgroundColor":null,"width":16,"htmlIntrinsicSize":{"height":32,"width":32},"color":"#d8dfe3","height":16,"constraintValues":{"aspectRatioLocked":true,"height":16,"centerAnchorX":0.063492063492063489,"width":16,"bottom":4,"top":4,"centerAnchorY":0.5},"blending":"normal","y":4,"svg":"<?xml version=\"1.0\"?><svg xmlns=\"http:\/\/www.w3.org\/2000\/svg\" viewBox=\"0 0 32 32\"><path d=\"M 16 5 C 12.145852 5 9 8.1458513 9 12 C 9 14.408843 10.23116 16.55212 12.09375 17.8125 C 8.5266131 19.342333 6 22.881262 6 27 L 8 27 C 8 22.569334 11.569334 19 16 19 C 20.430666 19 24 22.569334 24 27 L 26 27 C 26 22.881262 23.473387 19.342333 19.90625 17.8125 C 21.76884 16.55212 23 14.408843 23 12 C 23 8.1458513 19.854148 5 16 5 z M 16 7 C 18.773268 7 21 9.2267317 21 12 C 21 14.773268 18.773268 17 16 17 C 13.226732 17 11 14.773268 11 12 C 11 9.2267317 13.226732 7 16 7 z\"><\/path><\/svg>"});var __layer_16__ = new TextLayer({"parent":item_2,"backgroundColor":null,"width":99,"x":27,"styledText":{"blocks":[{"inlineStyles":[{"css":{"fontSize":"16px","WebkitTextFillColor":"hsla(195, 81%, 10%, 0.8)","whiteSpace":"pre","fontWeight":400,"letterSpacing":"0px","tabSize":4,"fontFamily":"\"ProximaNova-Regular\", \"Proxima Nova\", serif","lineHeight":"1.5"},"startIndex":0,"endIndex":12}],"text":"Mavis Beacon"}]},"height":24,"constraintValues":{"left":null,"height":24,"centerAnchorX":0.6071428571428571,"width":99,"right":0,"top":null,"centerAnchorY":0.5},"blending":"normal","autoSize":true});var item_1 = new Layer({"parent":to_list_content,"name":"item_1","backgroundColor":null,"width":130,"x":-6,"height":24,"constraintValues":{"left":-6,"height":24,"centerAnchorX":0.47967479674796748,"width":130,"right":-1,"centerAnchorY":0.1875},"blending":"normal","clip":false,"borderStyle":"solid"});var __layer_17__ = new TextLayer({"parent":item_1,"backgroundColor":null,"width":103,"x":27,"styledText":{"blocks":[{"inlineStyles":[{"css":{"fontSize":"16px","WebkitTextFillColor":"rgba(70, 187, 255, 1.00)","whiteSpace":"pre","fontWeight":400,"letterSpacing":"0px","tabSize":4,"fontFamily":"\"ProximaNova-Regular\", \"Proxima Nova\", serif","lineHeight":"1.5"},"startIndex":0,"endIndex":14}],"text":"Mattias Posvar"}]},"height":24,"constraintValues":{"left":null,"height":24,"centerAnchorX":0.60384615384615381,"width":103,"right":0,"top":null,"centerAnchorY":0.5},"blending":"normal","autoSize":true});var __layer_18__ = new SVGLayer({"parent":item_1,"backgroundColor":null,"width":16,"htmlIntrinsicSize":{"height":32,"width":32},"color":"#d8dfe3","height":16,"constraintValues":{"aspectRatioLocked":true,"height":16,"centerAnchorX":0.061538461538461542,"width":16,"bottom":4,"top":4,"centerAnchorY":0.5},"blending":"normal","y":4,"svg":"<?xml version=\"1.0\"?><svg xmlns=\"http:\/\/www.w3.org\/2000\/svg\" viewBox=\"0 0 32 32\"><path d=\"M 16 5 C 12.145852 5 9 8.1458513 9 12 C 9 14.408843 10.23116 16.55212 12.09375 17.8125 C 8.5266131 19.342333 6 22.881262 6 27 L 8 27 C 8 22.569334 11.569334 19 16 19 C 20.430666 19 24 22.569334 24 27 L 26 27 C 26 22.881262 23.473387 19.342333 19.90625 17.8125 C 21.76884 16.55212 23 14.408843 23 12 C 23 8.1458513 19.854148 5 16 5 z M 16 7 C 18.773268 7 21 9.2267317 21 12 C 21 14.773268 18.773268 17 16 17 C 13.226732 17 11 14.773268 11 12 C 11 9.2267317 13.226732 7 16 7 z\"><\/path><\/svg>"});var page_link = new Layer({"parent":page_content,"name":"page_link","backgroundColor":null,"width":288,"x":16,"height":430,"constraintValues":{"left":16,"height":430,"centerAnchorX":0.5,"width":288,"bottom":0,"right":16,"top":null,"centerAnchorY":0.61050724637681164},"blending":"normal","clip":false,"borderStyle":"solid","y":122});var __layer_19__ = new TextLayer({"parent":page_link,"backgroundColor":null,"width":156,"styledText":{"blocks":[{"inlineStyles":[{"css":{"fontSize":"24px","WebkitTextFillColor":"#052530","whiteSpace":"pre","fontWeight":700,"letterSpacing":"0px","tabSize":4,"fontFamily":"\"ProximaNova-Bold\", \"Proxima Nova\", serif","lineHeight":"1.2"},"startIndex":0,"endIndex":14}],"text":"Shareable link"}],"alignment":"left"},"height":28,"constraintValues":{"height":28,"centerAnchorX":0.27083333333333331,"width":156,"centerAnchorY":0.03255813953488372},"blending":"normal","autoSize":true});var __layer_20__ = new TextLayer({"parent":page_link,"backgroundColor":null,"width":273,"styledText":{"blocks":[{"inlineStyles":[{"startIndex":0,"endIndex":42,"css":{"fontSize":"16px","WebkitTextFillColor":"hsla(195, 81%, 10%, 0.8)","whiteSpace":"pre","fontWeight":400,"letterSpacing":"0px","tabSize":4,"fontFamily":"\"ProximaNova-Regular\", \"Proxima Nova\", serif","lineHeight":"1.5"}}],"text":"Preview this trip or share it with others "},{"inlineStyles":[{"startIndex":0,"endIndex":28,"css":{"fontSize":"16px","WebkitTextFillColor":"hsla(195, 81%, 10%, 0.8)","whiteSpace":"pre","fontWeight":400,"letterSpacing":"0px","tabSize":4,"fontFamily":"\"ProximaNova-Regular\", \"Proxima Nova\", serif","lineHeight":"1.5"}}],"text":"using the unique link below."}],"alignment":"left"},"height":48,"constraintValues":{"left":null,"height":48,"centerAnchorX":0.47395833333333331,"width":273,"top":36,"centerAnchorY":0.13953488372093023},"blending":"normal","autoSize":true,"y":36});var __layer_21__ = new TextLayer({"parent":page_link,"backgroundColor":null,"width":251,"styledText":{"blocks":[{"inlineStyles":[{"startIndex":0,"endIndex":26,"css":{"fontSize":"16px","WebkitTextFillColor":"hsla(195, 81%, 10%, 0.8)","whiteSpace":"pre","fontWeight":400,"letterSpacing":"0px","tabSize":4,"fontFamily":"\"ProximaNova-Regular\", \"Proxima Nova\", serif","lineHeight":"1.5"}},{"startIndex":26,"endIndex":35,"css":{"fontSize":"16px","WebkitTextFillColor":"rgba(70, 187, 255, 1.00)","whiteSpace":"pre","fontWeight":400,"letterSpacing":"0px","tabSize":4,"fontFamily":"\"ProximaNova-Regular\", \"Proxima Nova\", serif","lineHeight":"1.5"}}],"text":"Anyone with this link can View Only"}],"alignment":"left"},"height":24,"constraintValues":{"left":null,"height":24,"centerAnchorX":0.4357638888888889,"width":251,"top":108,"centerAnchorY":0.27906976744186046},"blending":"normal","autoSize":true,"y":108});var __layer_22__ = new SVGLayer({"parent":page_link,"backgroundColor":null,"width":8,"x":255,"htmlIntrinsicSize":{"height":32,"width":32},"color":"rgba(70, 187, 255, 1.00)","height":8,"constraintValues":{"left":null,"aspectRatioLocked":true,"height":8,"centerAnchorX":0.89930555555555558,"width":8,"right":25,"top":116,"centerAnchorY":0.27906976744186046},"blending":"normal","y":116,"svg":"<?xml version=\"1.0\"?><svg xmlns=\"http:\/\/www.w3.org\/2000\/svg\" viewBox=\"0 0 32 32\"><path d=\"M 4.21875 10.78125 L 2.78125 12.21875 L 15.28125 24.71875 L 16 25.40625 L 16.71875 24.71875 L 29.21875 12.21875 L 27.78125 10.78125 L 16 22.5625 L 4.21875 10.78125 z\"><\/path><\/svg>"});var __layer_23__ = new SVGLayer({"parent":page_link,"name":".SVGLayer","backgroundColor":"#d8dfe3","width":288,"strokeWidth":1,"htmlIntrinsicSize":{"height":1,"width":288},"rotation":null,"height":1,"fill":"#d8dfe3","opacity":null,"y":136,"svg":"<svg xmlns=\"http:\/\/www.w3.org\/2000\/svg\" width=\"288\" height=\"1\"><path d=\"M 0 0 L 288 0 L 288 1 L 0 1 Z\" name=\"Path\"><\/path><\/svg>"});var __layer_24__ = new TextLayer({"parent":page_link,"backgroundColor":null,"width":287,"styledText":{"blocks":[{"inlineStyles":[{"css":{"fontSize":"12px","WebkitTextFillColor":"rgba(70, 187, 255, 1.00)","whiteSpace":"pre","fontWeight":400,"letterSpacing":"0px","tabSize":4,"fontFamily":"\"ProximaNova-Regular\", \"Proxima Nova\", serif","lineHeight":"1.5"},"startIndex":0,"endIndex":55}],"text":"https:\/\/travefy.com\/trip\/garr68txydrk7nwx7afx28q3ujf..."}],"alignment":"left"},"height":18,"constraintValues":{"left":null,"height":18,"centerAnchorX":0.4982638888888889,"width":287,"top":153,"centerAnchorY":0.37674418604651161},"blending":"normal","autoSize":true,"y":153});var __layer_25__ = new SVGLayer({"parent":page_link,"name":".SVGLayer","backgroundColor":"rgba(70, 187, 255, 1.00)","width":288,"strokeWidth":1,"htmlIntrinsicSize":{"height":40,"width":288},"rotation":null,"height":40,"fill":"rgba(70, 187, 255, 1.00)","borderRadius":4,"opacity":null,"y":342,"svg":"<svg xmlns=\"http:\/\/www.w3.org\/2000\/svg\" width=\"288\" height=\"40\"><path d=\"M 0 4 C 0 1.791 1.791 0 4 0 L 284 0 C 286.209 0 288 1.791 288 4 L 288 36 C 288 38.209 286.209 40 284 40 L 4 40 C 1.791 40 0 38.209 0 36 Z\" name=\"Rectangle\"><\/path><\/svg>"});var __layer_26__ = new TextLayer({"parent":page_link,"backgroundColor":null,"width":129,"x":80,"styledText":{"blocks":[{"inlineStyles":[{"css":{"fontSize":"16px","WebkitTextFillColor":"hsl(0, 0%, 100%)","whiteSpace":"pre","fontWeight":400,"letterSpacing":"0px","tabSize":4,"fontFamily":"\"ProximaNova-Regular\", \"Proxima Nova\", serif","lineHeight":"1.5"},"startIndex":0,"endIndex":17}],"text":"Copy to Clipboard"}]},"height":24,"constraintValues":{"left":null,"height":24,"centerAnchorX":0.50173611111111116,"width":129,"bottom":56,"top":null,"centerAnchorY":0.8418604651162791},"blending":"normal","autoSize":true,"y":350});var __layer_27__ = new SVGLayer({"parent":page_link,"name":".SVGLayer","backgroundColor":"#f3f6f6","width":288,"strokeWidth":1,"htmlIntrinsicSize":{"height":40,"width":288},"rotation":null,"height":40,"fill":"#f3f6f6","borderRadius":4,"opacity":null,"y":390,"svg":"<svg xmlns=\"http:\/\/www.w3.org\/2000\/svg\" width=\"288\" height=\"40\"><path d=\"M 0 4 C 0 1.791 1.791 0 4 0 L 284 0 C 286.209 0 288 1.791 288 4 L 288 36 C 288 38.209 286.209 40 284 40 L 4 40 C 1.791 40 0 38.209 0 36 Z\" name=\"Rectangle\"><\/path><\/svg>"});var __layer_28__ = new TextLayer({"parent":page_link,"backgroundColor":null,"width":126,"x":82,"styledText":{"blocks":[{"inlineStyles":[{"css":{"fontSize":"16px","WebkitTextFillColor":"rgba(125, 150, 163, 1.00)","whiteSpace":"pre","fontWeight":400,"letterSpacing":"0px","tabSize":4,"fontFamily":"\"ProximaNova-Regular\", \"Proxima Nova\", serif","lineHeight":"1.5"},"startIndex":0,"endIndex":18}],"text":"View the Trip Link"}],"alignment":"center"},"height":24,"constraintValues":{"left":null,"height":24,"centerAnchorX":0.50347222222222221,"width":126,"bottom":8,"top":null,"centerAnchorY":0.95348837209302328},"blending":"normal","autoSize":true,"y":398});var __layer_29__ = new Layer({"parent":__layer_0__,"name":"tabbar","backgroundColor":null,"width":320,"height":52,"constraintValues":{"height":52,"centerAnchorX":0.5,"width":320,"right":0,"top":46,"centerAnchorY":0.12676056338028169},"blending":"normal","clip":false,"borderStyle":"solid","y":46});var __layer_30__ = new Layer({"parent":__layer_29__,"name":"tab_link","backgroundColor":null,"width":80,"height":51,"constraintValues":{"height":51,"centerAnchorX":0.125,"width":80,"bottom":1,"centerAnchorY":0.49038461538461536},"blending":"normal","clip":false,"borderStyle":"solid"});var __layer_31__ = new TextLayer({"parent":__layer_30__,"backgroundColor":null,"width":30,"x":25,"styledText":{"blocks":[{"inlineStyles":[{"startIndex":0,"endIndex":4,"css":{"fontSize":"16px","WebkitTextFillColor":"rgba(129, 188, 46, 1.00)","whiteSpace":"pre","fontWeight":400,"letterSpacing":"0px","tabSize":4,"fontFamily":"\"ProximaNova-Regular\", \"Proxima Nova\", serif","lineHeight":"1.2"}}],"text":"Link"}],"alignment":"center"},"height":19,"constraintValues":{"left":null,"height":19,"centerAnchorX":0.5,"width":30,"top":null,"centerAnchorY":0.48999999999999999},"blending":"normal","autoSize":true,"y":15});var __layer_32__ = new Layer({"parent":__layer_29__,"name":"tab_travelers","backgroundColor":null,"width":80,"x":80,"height":51,"constraintValues":{"left":80,"height":51,"centerAnchorX":0.375,"width":80,"bottom":1,"centerAnchorY":0.49038461538461536},"blending":"normal","clip":false,"borderStyle":"solid"});var __layer_33__ = new TextLayer({"parent":__layer_32__,"backgroundColor":null,"width":65,"x":8,"styledText":{"blocks":[{"inlineStyles":[{"css":{"fontSize":"16px","WebkitTextFillColor":"rgba(125, 150, 163, 1.00)","whiteSpace":"pre","fontWeight":400,"letterSpacing":"0px","tabSize":4,"fontFamily":"\"ProximaNova-Regular\", \"Proxima Nova\", serif","lineHeight":"1.2"},"startIndex":0,"endIndex":9}],"text":"Travelers"}],"alignment":"center"},"height":19,"constraintValues":{"left":null,"height":19,"centerAnchorX":0.5,"width":65,"top":null,"centerAnchorY":0.48039215686274511},"blending":"normal","autoSize":true,"y":15});var __layer_34__ = new Layer({"parent":__layer_29__,"name":"tab_email","backgroundColor":null,"width":80,"x":160,"height":51,"constraintValues":{"left":null,"height":51,"centerAnchorX":0.625,"width":80,"bottom":1,"right":80,"centerAnchorY":0.49038461538461536},"blending":"normal","clip":false,"borderStyle":"solid"});var __layer_35__ = new TextLayer({"parent":__layer_34__,"backgroundColor":null,"width":39,"x":21,"styledText":{"blocks":[{"inlineStyles":[{"startIndex":0,"endIndex":5,"css":{"fontSize":"16px","WebkitTextFillColor":"rgba(125, 150, 163, 1.00)","whiteSpace":"pre","fontWeight":400,"letterSpacing":"0px","tabSize":4,"fontFamily":"\"ProximaNova-Regular\", \"Proxima Nova\", serif","lineHeight":"1.2"}}],"text":"Email"}],"alignment":"center"},"height":19,"constraintValues":{"left":null,"height":19,"centerAnchorX":0.5,"width":39,"top":null,"centerAnchorY":0.48039215686274511},"blending":"normal","autoSize":true,"y":15});var __layer_36__ = new Layer({"parent":__layer_29__,"name":"tab_pdf","backgroundColor":null,"width":80,"x":240,"height":51,"constraintValues":{"left":null,"height":51,"centerAnchorX":0.875,"width":80,"bottom":1,"right":0,"centerAnchorY":0.49038461538461536},"blending":"normal","clip":false,"borderStyle":"solid"});var __layer_37__ = new TextLayer({"parent":__layer_36__,"backgroundColor":null,"width":31,"x":25,"styledText":{"blocks":[{"inlineStyles":[{"css":{"fontSize":"16px","WebkitTextFillColor":"rgba(125, 150, 163, 1.00)","whiteSpace":"pre","fontWeight":400,"letterSpacing":"0px","tabSize":4,"fontFamily":"\"ProximaNova-Regular\", \"Proxima Nova\", serif","lineHeight":"1.2"},"startIndex":0,"endIndex":3}],"text":"PDF"}],"alignment":"center"},"height":19,"constraintValues":{"left":null,"height":19,"centerAnchorX":0.5,"width":31,"top":null,"centerAnchorY":0.48039215686274511},"blending":"normal","autoSize":true,"y":15});var __layer_38__ = new SVGLayer({"parent":__layer_29__,"name":".SVGLayer","backgroundColor":"#d8dfe3","width":320,"strokeWidth":1,"htmlIntrinsicSize":{"height":1,"width":320},"rotation":null,"height":1,"fill":"#d8dfe3","opacity":null,"y":51,"svg":"<svg xmlns=\"http:\/\/www.w3.org\/2000\/svg\" width=\"320\" height=\"1\"><path d=\"M 0 0 L 320 0 L 320 1 L 0 1 Z\" name=\"Path\"><\/path><\/svg>"});var __layer_39__ = new SVGLayer({"parent":__layer_29__,"name":".SVGLayer","backgroundColor":"rgba(129, 188, 46, 1.00)","width":80,"strokeWidth":1,"htmlIntrinsicSize":{"height":1,"width":80},"rotation":null,"height":1,"fill":"rgba(129, 188, 46, 1.00)","opacity":null,"y":51,"svg":"<svg xmlns=\"http:\/\/www.w3.org\/2000\/svg\" width=\"80\" height=\"1\"><path d=\"M 0 0 L 80 0 L 80 1 L 0 1 Z\" name=\"Rectangle\"><\/path><\/svg>"});var __layer_40__ = new Layer({"parent":__layer_0__,"name":"title_bar","backgroundColor":null,"width":320,"height":45,"constraintValues":{"height":45,"centerAnchorX":0.5,"width":320,"right":0,"centerAnchorY":0.039612676056338031},"blending":"normal","clip":false,"borderStyle":"solid"});var __layer_41__ = new SVGLayer({"parent":__layer_40__,"name":".SVGLayer","backgroundColor":"#f3f6f6","width":320,"strokeWidth":1,"htmlIntrinsicSize":{"height":45,"width":320},"rotation":null,"height":45,"fill":"#f3f6f6","opacity":null,"svg":"<svg xmlns=\"http:\/\/www.w3.org\/2000\/svg\" width=\"320\" height=\"45\"><path d=\"M 0 0 L 320 0 L 320 45 L 0 45 Z\" name=\"Rectangle\"><\/path><\/svg>"});var __layer_42__ = new TextLayer({"parent":__layer_40__,"backgroundColor":null,"width":42,"x":16,"styledText":{"blocks":[{"inlineStyles":[{"css":{"fontSize":"16px","WebkitTextFillColor":"rgba(125, 150, 163, 1.00)","whiteSpace":"pre","fontWeight":400,"letterSpacing":"0px","tabSize":4,"fontFamily":"\"ProximaNova-Regular\", \"Proxima Nova\", serif","lineHeight":"1.2"},"startIndex":0,"endIndex":5}],"text":"Share"}]},"height":19,"constraintValues":{"left":16,"height":19,"centerAnchorX":0.11562500000000001,"width":42,"top":null,"centerAnchorY":0.5},"blending":"normal","autoSize":true,"y":13});var __layer_43__ = new SVGLayer({"parent":__layer_40__,"backgroundColor":null,"width":16,"x":288,"htmlIntrinsicSize":{"height":32,"width":32},"color":"rgba(125, 150, 163, 1.00)","height":16,"constraintValues":{"left":null,"aspectRatioLocked":true,"height":16,"centerAnchorX":0.92500000000000004,"width":16,"right":16,"top":null,"centerAnchorY":0.48888888888888887},"blending":"normal","y":14,"svg":"<?xml version=\"1.0\"?><svg xmlns=\"http:\/\/www.w3.org\/2000\/svg\" viewBox=\"0 0 32 32\"><path d=\"M 7.21875 5.78125 L 5.78125 7.21875 L 14.5625 16 L 5.78125 24.78125 L 7.21875 26.21875 L 16 17.4375 L 24.78125 26.21875 L 26.21875 24.78125 L 17.4375 16 L 26.21875 7.21875 L 24.78125 5.78125 L 16 14.5625 L 7.21875 5.78125 z\"><\/path><\/svg>"});if(__layer_25__ !== undefined){__layer_25__.__framerInstanceInfo = {"hash":"#vekter|__layer_25__","vekterClass":"RectangleShapeNode","framerClass":"SVGLayer"}};if(__layer_36__ !== undefined){__layer_36__.__framerInstanceInfo = {"hash":"#vekter|__layer_36__","vekterClass":"FrameNode","framerClass":"Layer"}};if(to_list !== undefined){to_list.__framerInstanceInfo = {"framerClass":"Layer","hash":"#vekter|to_list","targetName":"to_list","vekterClass":"FrameNode"}};if(__layer_10__ !== undefined){__layer_10__.__framerInstanceInfo = {"hash":"#vekter|__layer_10__","vekterClass":"RectangleShapeNode","framerClass":"SVGLayer"}};if(page_email !== undefined){page_email.__framerInstanceInfo = {"framerClass":"Layer","hash":"#vekter|page_email","targetName":"page_email","vekterClass":"FrameNode"}};if(__layer_35__ !== undefined){__layer_35__.__framerInstanceInfo = {"framerClass":"TextLayer","hash":"#vekter|__layer_35__","vekterClass":"TextNode","text":"Email"}};if(item_1 !== undefined){item_1.__framerInstanceInfo = {"framerClass":"Layer","hash":"#vekter|item_1","targetName":"item_1","vekterClass":"FrameNode"}};if(__layer_21__ !== undefined){__layer_21__.__framerInstanceInfo = {"framerClass":"TextLayer","hash":"#vekter|__layer_21__","vekterClass":"TextNode","text":"Anyone with this link can View Only"}};if(text !== undefined){text.__framerInstanceInfo = {"framerClass":"TextLayer","hash":"#vekter|text","targetName":"text","vekterClass":"TextNode","text":"Name or Email Address"}};if(__layer_43__ !== undefined){__layer_43__.__framerInstanceInfo = {"originalFilename":"fa-close.svg","framerClass":"SVGLayer","hash":"#vekter|__layer_43__","vekterClass":"SVGNode"}};if(__layer_31__ !== undefined){__layer_31__.__framerInstanceInfo = {"framerClass":"TextLayer","hash":"#vekter|__layer_31__","vekterClass":"TextNode","text":"Link"}};if(__layer_26__ !== undefined){__layer_26__.__framerInstanceInfo = {"framerClass":"TextLayer","hash":"#vekter|__layer_26__","vekterClass":"TextNode","text":"Copy to Clipboard"}};if(__layer_18__ !== undefined){__layer_18__.__framerInstanceInfo = {"originalFilename":"fa-user.svg","framerClass":"SVGLayer","hash":"#vekter|__layer_18__","vekterClass":"SVGNode"}};if(__layer_27__ !== undefined){__layer_27__.__framerInstanceInfo = {"hash":"#vekter|__layer_27__","vekterClass":"RectangleShapeNode","framerClass":"SVGLayer"}};if(to_field !== undefined){to_field.__framerInstanceInfo = {"framerClass":"Layer","hash":"#vekter|to_field","targetName":"to_field","vekterClass":"FrameNode"}};if(item_2 !== undefined){item_2.__framerInstanceInfo = {"framerClass":"Layer","hash":"#vekter|item_2","targetName":"item_2","vekterClass":"FrameNode"}};if(__layer_2__ !== undefined){__layer_2__.__framerInstanceInfo = {"framerClass":"TextLayer","hash":"#vekter|__layer_2__","vekterClass":"TextNode","text":"Email this trip"}};if(__layer_14__ !== undefined){__layer_14__.__framerInstanceInfo = {"hash":"#vekter|__layer_14__","vekterClass":"RectangleShapeNode","framerClass":"SVGLayer"}};if(__layer_15__ !== undefined){__layer_15__.__framerInstanceInfo = {"originalFilename":"fa-user.svg","framerClass":"SVGLayer","hash":"#vekter|__layer_15__","vekterClass":"SVGNode"}};if(__layer_19__ !== undefined){__layer_19__.__framerInstanceInfo = {"framerClass":"TextLayer","hash":"#vekter|__layer_19__","vekterClass":"TextNode","text":"Shareable link"}};if(__layer_39__ !== undefined){__layer_39__.__framerInstanceInfo = {"hash":"#vekter|__layer_39__","vekterClass":"RectangleShapeNode","framerClass":"SVGLayer"}};if(__layer_13__ !== undefined){__layer_13__.__framerInstanceInfo = {"framerClass":"TextLayer","hash":"#vekter|__layer_13__","vekterClass":"TextNode","text":"To:"}};if(__layer_11__ !== undefined){__layer_11__.__framerInstanceInfo = {"framerClass":"TextLayer","hash":"#vekter|__layer_11__","vekterClass":"TextNode","text":"Send to Yourself"}};if(__layer_1__ !== undefined){__layer_1__.__framerInstanceInfo = {"hash":"#vekter|__layer_1__","vekterClass":"RectangleShapeNode","framerClass":"SVGLayer"}};if(__layer_30__ !== undefined){__layer_30__.__framerInstanceInfo = {"hash":"#vekter|__layer_30__","vekterClass":"FrameNode","framerClass":"Layer"}};if(__layer_28__ !== undefined){__layer_28__.__framerInstanceInfo = {"framerClass":"TextLayer","hash":"#vekter|__layer_28__","vekterClass":"TextNode","text":"View the Trip Link"}};if(__layer_22__ !== undefined){__layer_22__.__framerInstanceInfo = {"originalFilename":"fa-angle-down.svg","framerClass":"SVGLayer","hash":"#vekter|__layer_22__","vekterClass":"SVGNode"}};if(__layer_3__ !== undefined){__layer_3__.__framerInstanceInfo = {"framerClass":"TextLayer","hash":"#vekter|__layer_3__","vekterClass":"TextNode","text":"Send a beautifully formated email with\ndetails explaining how to view this trip."}};if(__layer_5__ !== undefined){__layer_5__.__framerInstanceInfo = {"framerClass":"TextLayer","hash":"#vekter|__layer_5__","vekterClass":"TextNode","text":"Type a custom message..."}};if(__layer_9__ !== undefined){__layer_9__.__framerInstanceInfo = {"hash":"#vekter|__layer_9__","vekterClass":"FrameNode","framerClass":"Layer"}};if(__layer_32__ !== undefined){__layer_32__.__framerInstanceInfo = {"hash":"#vekter|__layer_32__","vekterClass":"FrameNode","framerClass":"Layer"}};if(__layer_0__ !== undefined){__layer_0__.__framerInstanceInfo = {"framerClass":"Layer","hash":"#vekter|__layer_0__","vekterClass":"FrameNode","deviceType":"apple-iphone-se-space-gray","deviceName":"Apple iPhone SE"}};if(__layer_12__ !== undefined){__layer_12__.__framerInstanceInfo = {"hash":"#vekter|__layer_12__","vekterClass":"RectangleShapeNode","framerClass":"SVGLayer"}};if(__layer_42__ !== undefined){__layer_42__.__framerInstanceInfo = {"framerClass":"TextLayer","hash":"#vekter|__layer_42__","vekterClass":"TextNode","text":"Share"}};if(page_link !== undefined){page_link.__framerInstanceInfo = {"framerClass":"Layer","hash":"#vekter|page_link","targetName":"page_link","vekterClass":"FrameNode"}};if(__layer_41__ !== undefined){__layer_41__.__framerInstanceInfo = {"hash":"#vekter|__layer_41__","vekterClass":"RectangleShapeNode","framerClass":"SVGLayer"}};if(__layer_23__ !== undefined){__layer_23__.__framerInstanceInfo = {"hash":"#vekter|__layer_23__","vekterClass":"PathNode","framerClass":"SVGLayer"}};if(__layer_4__ !== undefined){__layer_4__.__framerInstanceInfo = {"hash":"#vekter|__layer_4__","vekterClass":"RectangleShapeNode","framerClass":"SVGLayer"}};if(to_list_content !== undefined){to_list_content.__framerInstanceInfo = {"framerClass":"Layer","hash":"#vekter|to_list_content","targetName":"to_list_content","vekterClass":"FrameNode"}};if(__layer_37__ !== undefined){__layer_37__.__framerInstanceInfo = {"framerClass":"TextLayer","hash":"#vekter|__layer_37__","vekterClass":"TextNode","text":"PDF"}};if(__layer_20__ !== undefined){__layer_20__.__framerInstanceInfo = {"framerClass":"TextLayer","hash":"#vekter|__layer_20__","vekterClass":"TextNode","text":"Preview this trip or share it with others \nusing the unique link below."}};if(__layer_40__ !== undefined){__layer_40__.__framerInstanceInfo = {"hash":"#vekter|__layer_40__","vekterClass":"FrameNode","framerClass":"Layer"}};if(__layer_7__ !== undefined){__layer_7__.__framerInstanceInfo = {"hash":"#vekter|__layer_7__","vekterClass":"RectangleShapeNode","framerClass":"SVGLayer"}};if(__layer_29__ !== undefined){__layer_29__.__framerInstanceInfo = {"hash":"#vekter|__layer_29__","vekterClass":"FrameNode","framerClass":"Layer"}};if(__layer_8__ !== undefined){__layer_8__.__framerInstanceInfo = {"framerClass":"TextLayer","hash":"#vekter|__layer_8__","vekterClass":"TextNode","text":"Send Email"}};if(background !== undefined){background.__framerInstanceInfo = {"framerClass":"SVGPath","hash":"#vekter|background","targetName":"background","vekterClass":"RectangleShapeNode"}};if(__layer_24__ !== undefined){__layer_24__.__framerInstanceInfo = {"framerClass":"TextLayer","hash":"#vekter|__layer_24__","vekterClass":"TextNode","text":"https:\/\/travefy.com\/trip\/garr68txydrk7nwx7afx28q3ujf..."}};if(__layer_33__ !== undefined){__layer_33__.__framerInstanceInfo = {"framerClass":"TextLayer","hash":"#vekter|__layer_33__","vekterClass":"TextNode","text":"Travelers"}};if(__layer_38__ !== undefined){__layer_38__.__framerInstanceInfo = {"hash":"#vekter|__layer_38__","vekterClass":"PathNode","framerClass":"SVGLayer"}};if(__layer_16__ !== undefined){__layer_16__.__framerInstanceInfo = {"framerClass":"TextLayer","hash":"#vekter|__layer_16__","vekterClass":"TextNode","text":"Mavis Beacon"}};if(__layer_34__ !== undefined){__layer_34__.__framerInstanceInfo = {"hash":"#vekter|__layer_34__","vekterClass":"FrameNode","framerClass":"Layer"}};if(outside !== undefined){outside.__framerInstanceInfo = {"framerClass":"Layer","hash":"#vekter|outside","targetName":"outside","vekterClass":"FrameNode"}};if(__layer_6__ !== undefined){__layer_6__.__framerInstanceInfo = {"hash":"#vekter|__layer_6__","vekterClass":"FrameNode","framerClass":"Layer"}};if(__layer_17__ !== undefined){__layer_17__.__framerInstanceInfo = {"framerClass":"TextLayer","hash":"#vekter|__layer_17__","vekterClass":"TextNode","text":"Mattias Posvar"}};if(page_content !== undefined){page_content.__framerInstanceInfo = {"framerClass":"Layer","hash":"#vekter|page_content","targetName":"page_content","vekterClass":"FrameNode"}};if (scope["__vekterVariables"]) { scope["__vekterVariables"].map(function(variable) { delete scope[variable] } ) };Object.assign(scope, {page_content, page_email, outside, to_field, background, text, to_list, to_list_content, item_2, item_1, page_link});scope["__vekterVariables"] = ["page_content", "page_email", "outside", "to_field", "background", "text", "to_list", "to_list_content", "item_2", "item_1", "page_link"];if (typeof Framer.CurrentContext.layout === 'function') {Framer.CurrentContext.layout()};})(window);