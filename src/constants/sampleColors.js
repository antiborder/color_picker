const sampleColors = [
    {
        'hex': '#FF0000',
        'name1': 'Red',
        'name2': '',
        'name3': '',
        'tag': ['CSS']
    },
    {
        'hex': '#00FF00',
        'name1': 'Lime',
        'name2': '',
        'name3': '',
        'tag': ['CSS']
    },
    {
        'hex': '#0000FF',
        'name1': 'Blue',
        'name2': '',
        'name3': '',
        'tag': ['CSS']
    },
    {
        'hex': '#00FFFF',
        'name1': 'Cyan',
        'name2': 'Aqua',
        'name3': '',
        'tag': ['CSS']
    },
    {
        'hex': '#FF00FF',
        'name1': 'Magenta',
        'name2': 'Fuchsia',
        'name3': '',
        'tag': ['CSS']
    },
    {
        'hex': '#FFFF00',
        'name1': 'Yellow',
        'name2': '',
        'name3': '',
        'tag': ['CSS']
    },
    {
        'hex': '#000000',
        'name1': 'Black',
        'name2': '',
        'name3': '',
        'tag': ['CSS']
    },
    {
        'hex': '#FFFFFF',
        'name1': 'White',
        'name2': '',
        'name3': '',
        'tag': ['CSS']
    },
    {
        'hex': '#C0C0C0',
        'name1': 'silver',
        'name2': '',
        'name3': '',
        'tag': ['CSS']
    },
    {
        'hex': '#808080',
        'name1': 'gray',
        'name2': '',
        'name3': '',
        'tag': ['CSS']
    },
    {
        'hex': '#800000',
        'name1': 'maroon',
        'name2': '',
        'name3': '',
        'tag': ['CSS']
    },
    {
        'hex': '#800080',
        'name1': 'purple',
        'name2': '',
        'name3': '',
        'tag': ['CSS']
    },
    {
        'hex': '#008000',
        'name1': 'green',
        'name2': '',
        'name3': '',
        'tag': ['CSS']
    },
    {
        'hex': '#808000',
        'name1': 'olive',
        'name2': '',
        'name3': '',
        'tag': ['CSS']
    },
    {
        'hex': '#000080',
        'name1': 'navy',
        'name2': '',
        'name3': '',
        'tag': ['CSS']
    },
    {
        'hex': '#008080',
        'name1': 'teal',
        'name2': '',
        'name3': '',
        'tag': ['CSS']
    },
    {
        'hex': '#F5F5F5',
        'name1': 'whitesmoke',
        'name2': '',
        'name3': '',
        'tag': ['CSS']
    },
    {
        'hex': '#DCDCDC',
        'name1': 'gainsboro',
        'name2': '',
        'name3': '',
        'tag': ['CSS']
    },
    {
        'hex': '#D3D3D3',
        'name1': 'lightgray',
        'name2': '',
        'name3': '',
        'tag': ['CSS']
    },
    {
        'hex': '#A9A9A9',
        'name1': 'darkgray',
        'name2': '',
        'name3': '',
        'tag': ['CSS']
    },
    {
        'hex': '#808080',
        'name1': 'gray',
        'name2': '',
        'name3': '',
        'tag': ['CSS']
    },
    {
        'hex': '#696969',
        'name1': 'dimgray',
        'name2': '',
        'name3': '',
        'tag': ['CSS']
    },
    {
        'hex': '#FFFAFA',
        'name1': 'snow',
        'name2': '',
        'name3': '',
        'tag': ['CSS']
    },
    {
        'hex': '#FFFACD',
        'name1': 'lemonchiffon',
        'name2': '',
        'name3': '',
        'tag': ['CSS']
    },
    {
        'hex': '#FFF8DC',
        'name1': 'cornsilk',
        'name2': '',
        'name3': '',
        'tag': ['CSS']
    },
    {
        'hex': '#FFF5EE',
        'name1': 'seashell',
        'name2': '',
        'name3': '',
        'tag': ['CSS']
    },
    {
        'hex': '#FFF0F5',
        'name1': 'lavenderblush',
        'name2': '',
        'name3': '',
        'tag': ['CSS']
    },
    {
        'hex': '#FFEFD5',
        'name1': 'papayawhip',
        'name2': '',
        'name3': '',
        'tag': ['CSS']
    },
    {
        'hex': '#FFEBCD',
        'name1': 'blanchedalmond',
        'name2': '',
        'name3': '',
        'tag': ['CSS']
    },
    {
        'hex': '#FFE4E1',
        'name1': 'mistyrose',
        'name2': '',
        'name3': '',
        'tag': ['CSS']
    },
    {
        'hex': '#FFE4C4',
        'name1': 'bisque',
        'name2': '',
        'name3': '',
        'tag': ['CSS']
    },
    {
        'hex': '#FFE4B5',
        'name1': 'moccasin',
        'name2': '',
        'name3': '',
        'tag': ['CSS']
    },
    {
        'hex': '#FFDEAD',
        'name1': 'navajowhite',
        'name2': '',
        'name3': '',
        'tag': ['CSS']
    },
    {
        'hex': '#FFDAB9',
        'name1': 'peachpuff',
        'name2': '',
        'name3': '',
        'tag': ['CSS']
    },
    {
        'hex': '#FFD700',
        'name1': 'gold',
        'name2': '',
        'name3': '',
        'tag': ['CSS']
    },
    {
        'hex': '#FFC0CB',
        'name1': 'pink',
        'name2': '',
        'name3': '',
        'tag': ['CSS']
    },
    {
        'hex': '#FFB6C1',
        'name1': 'lightpink',
        'name2': '',
        'name3': '',
        'tag': ['CSS']
    },
    {
        'hex': '#FFA500',
        'name1': 'orange',
        'name2': '',
        'name3': '',
        'tag': ['CSS']
    },
    {
        'hex': '#FFA07A',
        'name1': 'lightsalmon',
        'name2': '',
        'name3': '',
        'tag': ['CSS']
    },
    {
        'hex': '#FF8C00',
        'name1': 'darkorange',
        'name2': '',
        'name3': '',
        'tag': ['CSS']
    },
    {
        'hex': '#FF7F50',
        'name1': 'coral',
        'name2': '',
        'name3': '',
        'tag': ['CSS']
    },
    {
        'hex': '#FF69B4',
        'name1': 'hotpink',
        'name2': '',
        'name3': '',
        'tag': ['CSS']
    },
    {
        'hex': '#FF6347',
        'name1': 'tomato',
        'name2': '',
        'name3': '',
        'tag': ['CSS']
    },
    {
        'hex': '#FF4500',
        'name1': 'orangered',
        'name2': '',
        'name3': '',
        'tag': ['CSS']
    },
    {
        'hex': '#FF1493',
        'name1': 'deeppink',
        'name2': '',
        'name3': '',
        'tag': ['CSS']
    },
    {
        'hex': '#FDF5E6',
        'name1': 'oldlace',
        'name2': '',
        'name3': '',
        'tag': ['CSS']
    },
    {
        'hex': '#FAF0E6',
        'name1': 'linen',
        'name2': '',
        'name3': '',
        'tag': ['CSS']
    },
    {
        'hex': '#FAEBD7',
        'name1': 'antiquewhite',
        'name2': '',
        'name3': '',
        'tag': ['CSS']
    },
    {
        'hex': '#FA8072',
        'name1': 'salmon',
        'name2': '',
        'name3': '',
        'tag': ['CSS']
    },
    {
        'hex': '#F5DEB3',
        'name1': 'wheat',
        'name2': '',
        'name3': '',
        'tag': ['CSS']
    },
    {
        'hex': '#F4A460',
        'name1': 'sandybrown',
        'name2': '',
        'name3': '',
        'tag': ['CSS']
    },
    {
        'hex': '#F0E68C',
        'name1': 'khaki',
        'name2': '',
        'name3': '',
        'tag': ['CSS']
    },
    {
        'hex': '#F08080',
        'name1': 'lightcoral',
        'name2': '',
        'name3': '',
        'tag': ['CSS']
    },
    {
        'hex': '#DB7093',
        'name1': 'palevioletred',
        'name2': '',
        'name3': '',
        'tag': ['CSS']
    },
    {
        'hex': '#DAA520',
        'name1': 'goldenrod',
        'name2': '',
        'name3': '',
        'tag': ['CSS']
    },
    {
        'hex': '#DA70D6',
        'name1': 'orchid',
        'name2': '',
        'name3': '',
        'tag': ['CSS']
    },
    {
        'hex': '#D2B48C',
        'name1': 'tan',
        'name2': '',
        'name3': '',
        'tag': ['CSS']
    },
    {
        'hex': '#D2691E',
        'name1': 'chocolate',
        'name2': '',
        'name3': '',
        'tag': ['CSS']
    },
    {
        'hex': '#CD853F',
        'name1': 'peru',
        'name2': '',
        'name3': '',
        'tag': ['CSS']
    },
    {
        'hex': '#CD5C5C',
        'name1': 'indianred',
        'name2': '',
        'name3': '',
        'tag': ['CSS']
    },
    {
        'hex': '#C71585',
        'name1': 'mediumvioletred',
        'name2': '',
        'name3': '',
        'tag': ['CSS']
    },
    {
        'hex': '#BDB76B',
        'name1': 'darkkhaki',
        'name2': '',
        'name3': '',
        'tag': ['CSS']
    },
    {
        'hex': '#BC8F8F',
        'name1': 'rosybrown',
        'name2': '',
        'name3': '',
        'tag': ['CSS']
    },
    {
        'hex': '#B8860B',
        'name1': 'darkgoldenrod',
        'name2': '',
        'name3': '',
        'tag': ['CSS']
    },
    {
        'hex': '#B22222',
        'name1': 'firebrick',
        'name2': '',
        'name3': '',
        'tag': ['CSS']
    },
    {
        'hex': '#A52A2A',
        'name1': 'brown',
        'name2': '',
        'name3': '',
        'tag': ['CSS']
    },
    {
        'hex': '#A0522D',
        'name1': 'sienna',
        'name2': '',
        'name3': '',
        'tag': ['CSS']
    },
    {
        'hex': '#8B4513',
        'name1': 'sadlebrown',
        'name2': '',
        'name3': '',
        'tag': ['CSS']
    },
    {
        'hex': '#8B0000',
        'name1': 'darkred',
        'name2': '',
        'name3': '',
        'tag': ['CSS']
    },
    {
        'hex': '#D8BFD8',
        'name1': 'thistle',
        'name2': '',
        'name3': '',
        'tag': ['CSS']
    }, {
        'hex': '#DDA0DD',
        'name1': 'plum',
        'name2': '',
        'name3': '',
        'tag': ['CSS']
    }, {
        'hex': '#EE82EE',
        'name1': 'violet',
        'name2': '',
        'name3': '',
        'tag': ['CSS']
    }, {
        'hex': '#8B008B',
        'name1': 'darkmagenta',
        'name2': '',
        'name3': '',
        'tag': ['CSS']
    }, {
        'hex': '#F5FFFA',
        'name1': 'mintcream',
        'name2': '',
        'name3': '',
        'tag': ['CSS']
    }, {
        'hex': '#F0FFF0',
        'name1': 'honeydew',
        'name2': '',
        'name3': '',
        'tag': ['CSS']
    }, {
        'hex': '#ADFF2F',
        'name1': 'greenyellow',
        'name2': '',
        'name3': '',
        'tag': ['CSS']
    }, {
        'hex': '#7FFFD4',
        'name1': 'aquamrine',
        'name2': '',
        'name3': '',
        'tag': ['CSS']
    }, {
        'hex': '#7FFF00',
        'name1': 'chartreuse',
        'name2': '',
        'name3': '',
        'tag': ['CSS']
    }, {
        'hex': '#00FF7F',
        'name1': 'springgreen',
        'name2': '',
        'name3': '',
        'tag': ['CSS']
    }, {
        'hex': '#7CFC00',
        'name1': 'lawngreen',
        'name2': '',
        'name3': '',
        'tag': ['CSS']
    }, {
        'hex': '#98FB98',
        'name1': 'palegreen',
        'name2': '',
        'name3': '',
        'tag': ['CSS']
    }, {
        'hex': '#00FA9A',
        'name1': 'mediumspringgreen',
        'name2': '',
        'name3': '',
        'tag': ['CSS']
    }, {
        'hex': '#90EE90',
        'name1': 'lightgreen',
        'name2': '',
        'name3': '',
        'tag': ['CSS']
    }, {
        'hex': '#40E0D0',
        'name1': 'turquoise',
        'name2': '',
        'name3': '',
        'tag': ['CSS']
    }, {
        'hex': '#48D1CC',
        'name1': 'mediumturquoise',
        'name2': '',
        'name3': '',
        'tag': ['CSS']
    }, {
        'hex': '#9ACD32',
        'name1': 'yellowgreen',
        'name2': '',
        'name3': '',
        'tag': ['CSS']
    }, {
        'hex': '#66CDAA',
        'name1': 'mediumaquamarine',
        'name2': '',
        'name3': '',
        'tag': ['CSS']
    }, {
        'hex': '#32CD32',
        'name1': 'limegreen',
        'name2': '',
        'name3': '',
        'tag': ['CSS']
    }, {
        'hex': '#8FBC8F',
        'name1': 'darkseagreen',
        'name2': '',
        'name3': '',
        'tag': ['CSS']
    }, {
        'hex': '#3CB371',
        'name1': 'mediumseagreen',
        'name2': '',
        'name3': '',
        'tag': ['CSS']
    }, {
        'hex': '#20B2AA',
        'name1': 'lightseagreen',
        'name2': '',
        'name3': '',
        'tag': ['CSS']
    }, {
        'hex': '#6B8E23',
        'name1': 'oliverdrab',
        'name2': '',
        'name3': '',
        'tag': ['CSS']
    }, {
        'hex': '#2E8B57',
        'name1': 'seagreen',
        'name2': '',
        'name3': '',
        'tag': ['CSS']
    }, {
        'hex': '#228B22',
        'name1': 'forestgreen',
        'name2': '',
        'name3': '',
        'tag': ['CSS']
    }, {
        'hex': '#556B2F',
        'name1': 'darkolivegreen',
        'name2': '',
        'name3': '',
        'tag': ['CSS']
    }, {
        'hex': '#006400',
        'name1': 'darkgreen',
        'name2': '',
        'name3': '',
        'tag': ['CSS']
    }, {
        'hex': '#F0FFFF',
        'name1': 'azure',
        'name2': '',
        'name3': '',
        'tag': ['CSS']
    }, {
        'hex': '#E0FFFF',
        'name1': 'lightcyan',
        'name2': '',
        'name3': '',
        'tag': ['CSS']
    },
    {
        'hex': '#AFEEEE',
        'name1': 'paleturquoise',
        'name2': '',
        'name3': '',
        'tag': ['CSS']
    },
    {
        'hex': '#008B8B',
        'name1': 'darkcyan',
        'name2': '',
        'name3': '',
        'tag': ['CSS']
    },
    {
        'hex': '#2F4F4F',
        'name1': 'darkslategray',
        'name2': '',
        'name3': '',
        'tag': ['CSS']
    },
    {
        'hex': '#F8F8FF',
        'name1': 'ghostwhite',
        'name2': '',
        'name3': '',
        'tag': ['CSS']
    },
    {
        'hex': '#F0F8FF',
        'name1': 'aliceblue',
        'name2': '',
        'name3': '',
        'tag': ['CSS']
    },
    {
        'hex': '#1E90FF',
        'name1': 'dodgerblue',
        'name2': '',
        'name3': '',
        'tag': ['CSS']
    },
    {
        'hex': '#00BFFF',
        'name1': 'deepskyblue',
        'name2': '',
        'name3': '',
        'tag': ['CSS']
    },
    {
        'hex': '#E6E6FA',
        'name1': 'lavender',
        'name2': '',
        'name3': '',
        'tag': ['CSS']
    },
    {
        'hex': '#87CEFA',
        'name1': 'lightskyblue',
        'name2': '',
        'name3': '',
        'tag': ['CSS']
    },
    {
        'hex': '#7B68EE',
        'name1': 'mediumslateblue',
        'name2': '',
        'name3': '',
        'tag': ['CSS']
    },
    {
        'hex': '#6495ED',
        'name1': 'cornflowerblue',
        'name2': '',
        'name3': '',
        'tag': ['CSS']
    },
    {
        'hex': '#87CEEB',
        'name1': 'skyblue',
        'name2': '',
        'name3': '',
        'tag': ['CSS']
    },
    {
        'hex': '#B0E0E6',
        'name1': 'powderblue',
        'name2': '',
        'name3': '',
        'tag': ['CSS']
    },
    {
        'hex': '#ADD8E6',
        'name1': 'lightblue',
        'name2': '',
        'name3': '',
        'tag': ['CSS']
    },
    {
        'hex': '#8A2BE2',
        'name1': 'blueviolet',
        'name2': '',
        'name3': '',
        'tag': ['CSS']
    },
    {
        'hex': '#4169E1',
        'name1': 'royalblue',
        'name2': '',
        'name3': '',
        'tag': ['CSS']
    },
    {
        'hex': '#B0C4DE',
        'name1': 'lightsteelblue',
        'name2': '',
        'name3': '',
        'tag': ['CSS']
    },
    {
        'hex': '#9370DB',
        'name1': 'mediumpurple',
        'name2': '',
        'name3': '',
        'tag': ['CSS']
    },
    {
        'hex': '#BA55D3',
        'name1': 'mediumorchid',
        'name2': '',
        'name3': '',
        'tag': ['CSS']
    },
    {
        'hex': '#9400D3',
        'name1': 'darkviolet',
        'name2': '',
        'name3': '',
        'tag': ['CSS']
    },
    {
        'hex': '#00CED1',
        'name1': 'darkturquoise',
        'name2': '',
        'name3': '',
        'tag': ['CSS']
    },
    {
        'hex': '#6A5ACD',
        'name1': 'slateblue',
        'name2': '',
        'name3': '',
        'tag': ['CSS']
    },
    {
        'hex': '#0000CD',
        'name1': 'mediumblue',
        'name2': '',
        'name3': '',
        'tag': ['CSS']
    },
    {
        'hex': '#9932CC',
        'name1': 'darkorchid',
        'name2': '',
        'name3': '',
        'tag': ['CSS']
    },
    {
        'hex': '#4682B4',
        'name1': 'steelblue',
        'name2': '',
        'name3': '',
        'tag': ['CSS']
    },
    {
        'hex': '#5F9EA0',
        'name1': 'cadetblue',
        'name2': '',
        'name3': '',
        'tag': ['CSS']
    },
    {
        'hex': '#778899',
        'name1': 'lightslategray',
        'name2': '',
        'name3': '',
        'tag': ['CSS']
    },
    {
        'hex': '#708090',
        'name1': 'slategray',
        'name2': '',
        'name3': '',
        'tag': ['CSS']
    },
    {
        'hex': '#483D8B',
        'name1': 'darkslateblue',
        'name2': '',
        'name3': '',
        'tag': ['CSS']
    },
    {
        'hex': '#00008B',
        'name1': 'darkblue',
        'name2': '',
        'name3': '',
        'tag': ['CSS']
    },
    {
        'hex': '#4B0082',
        'name1': 'indigo',
        'name2': '',
        'name3': '',
        'tag': ['CSS']
    },
    {
        'hex': '#191970',
        'name1': 'midnightblue',
        'name2': '',
        'name3': '',
        'tag': ['CSS']
    },
    {
        'hex': '#FFFFF0',
        'name1': 'ivory',
        'name2': '',
        'name3': '',
        'tag': ['CSS']
    },
    {
        'hex': '#FFFFE0',
        'name1': 'lightyellow',
        'name2': '',
        'name3': '',
        'tag': ['CSS']
    },
    {
        'hex': '#FAFAD2',
        'name1': 'lightgoldenrodyellow',
        'name2': '',
        'name3': '',
        'tag': ['CSS']
    },
    {
        'hex': '#F5F5DC',
        'name1': 'beige',
        'name2': '',
        'name3': '',
        'tag': ['CSS']
    },
    {
        'hex': '#fef4f4',
        'name1': '桜色',
        'name2': 'さくらいろ',
        'name3': '',
        'tag': ['JAPANESE']
    },
    {
        'hex': '#96514d',
        'name1': '小豆色',
        'name2': 'あずきいろ',
        'name3': '',
        'tag': ['JAPANESE']
    },
    {
        'hex': '#e6b422',
        'name1': '黄金',
        'name2': 'こがね',
        'name3': '',
        'tag': ['JAPANESE']
    },
    {
        'hex': '#006e54',
        'name1': '萌葱色',
        'name2': 'もえぎいろ',
        'name3': '',
        'tag': ['JAPANESE']
    },
    {
        'hex': '#895b8a',
        'name1': '古代紫',
        'name2': 'こだいむらさき',
        'name3': '',
        'tag': ['JAPANESE']
    },
    {
        'hex': '#fdeff2',
        'name1': '薄桜',
        'name2': 'うすざくら',
        'name3': '',
        'tag': ['JAPANESE']
    },
    {
        'hex': '#8d6449',
        'name1': '枯茶',
        'name2': 'からちゃ',
        'name3': '',
        'tag': ['JAPANESE']
    },
    {
        'hex': '#d9a62e',
        'name1': '櫨染',

        'name2': 'はじぞめ',
        'name3': '',
        'tag': ['JAPANESE']
    },
    {
        'hex': '#00a381',
        'name1': '花緑青',
        'name2': 'はなろくしょう',
        'name3': '',
        'tag': ['JAPANESE']
    },
    {
        'hex': '#824880',
        'name1': '茄子紺',
        'name2': 'なすこん',
        'name3': '',
        'tag': ['JAPANESE']
    },
    {
        'hex': '#e9dfe5',
        'name1': '桜鼠',
        'name2': 'さくらねず',
        'name3': '',
        'tag': ['JAPANESE']
    },
    {
        'hex': '#deb068',
        'name1': '飴色',
        'name2': 'あめいろ',
        'name3': '',
        'tag': ['JAPANESE']
    },
    {
        'hex': '#d3a243',
        'name1': '黄朽葉',
        'name2': 'きくちばいろ',
        'name3': '',
        'tag': ['JAPANESE']
    },
    {
        "hex": "#38b48b",
        "name1": "翡翠色",
        "name2": "ひすいいろ",
        "name3": "",
        "tag": ["JAPANESE"]
    },
    {
        "hex": "#915c8b",
        "name1": "二藍",
        "name2": "ふたあい",
        "name3": "",
        "tag": ["JAPANESE"]
    },
    {
        "hex": "#e4d2d8",
        "name1": "鴇鼠",
        "name2": "ときねず",
        "name3": "",
        "tag": ["JAPANESE"]
    },
    {
        "hex": "#bf794e",
        "name1": "駱駝色",
        "name2": "らくだいろ",
        "name3": "",
        "tag": ["JAPANESE"]
    },
    {
        "hex": "#c89932",
        "name1": "山吹茶",
        "name2": "やまぶきちゃ",
        "name3": "",
        "tag": ["JAPANESE"]
    },
    {
        "hex": "#00a497",
        "name1": "青緑",
        "name2": "あおみどり",
        "name3": "",
        "tag": ["JAPANESE"]
    },
    {
        "hex": "#9d5b8b",
        "name1": "京紫",
        "name2": "きょうむらさき",
        "name3": "",
        "tag": ["JAPANESE"]
    },
    {
        "hex": "#f6bfbc",
        "name1": "虹色",
        "name2": "にじいろ",
        "name3": "",
        "tag": ["JAPANESE"]
    },
    {
        "hex": "#bc763c",
        "name1": "土色",
        "name2": "つちいろ",
        "name3": "",
        "tag": ["JAPANESE"]
    },
    {
        "hex": "#d0af4c",
        "name1": "芥子色",
        "name2": "からしいろ",
        "name3": "",
        "tag": ["JAPANESE"]
    },
    {
        "hex": "#80aba9",
        "name1": "水浅葱",
        "name2": "みずあさぎ",
        "name3": "",
        "tag": ["JAPANESE"]
    },
    {
        "hex": "#7a4171",
        "name1": "蒲葡",
        "name2": "えびぞめ",
        "name3": "",
        "tag": ["JAPANESE"]
    },
    {
        "hex": "#f5b1aa",
        "name1": "珊瑚色",
        "name2": "さんごいろ",
        "name3": "",
        "tag": ["JAPANESE"]
    },
    {
        "hex": "#b98c46",
        "name1": "黄唐茶",
        "name2": "きがらちゃ",
        "name3": "",
        "tag": ["JAPANESE"]
    },
    {
        "hex": "#8b968d",
        "name1": "豆がら茶",
        "name2": "まめがらちゃ",
        "name3": "",
        "tag": ["JAPANESE"]
    },
    {
        "hex": "#5c9291",
        "name1": "錆浅葱",
        "name2": "さびあさぎ",
        "name3": "",
        "tag": ["JAPANESE"]
    },
    {
        "hex": "#bc64a4",
        "name1": "若紫",
        "name2": "わかむらさき",
        "name3": "",
        "tag": ["JAPANESE"]
    },
    {
        "hex": "#f5b199",
        "name1": "一斤染",
        "name2": "いっこんぞめ",
        "name3": "",
        "tag": ["JAPANESE"]
    },
    {
        "hex": "#b79b5b",
        "name1": "桑染",
        "name2": "くわぞめ",
        "name3": "",
        "tag": ["JAPANESE"]
    },
    {
        "hex": "#6e7955",
        "name1": "麹塵",
        "name2": "きくじん",
        "name3": "",
        'tag': ['JAPANESE']
    },
    {
        "hex": "#478384",
        "name1": "青碧",
        "name2": "せいへき",
        "name3": "",
        'tag': ['JAPANESE']
    },
    {
        "hex": "#b44c97",
        "name1": "紅紫",
        "name2": "べにむらさき",
        "name3": "",
        'tag': ['JAPANESE']
    },
    {
        "hex": "#efab93",
        "name1": "宍色",
        "name2": "ししいろ",
        "name3": "",
        'tag': ['JAPANESE']
    },
    {
        "hex": "#b77b57",
        "name1": "櫨色",
        "name2": "はじいろ",
        "name3": "",
        'tag': ['JAPANESE']
    },
    {
        "hex": "#767c6b",
        "name1": "山鳩色",
        "name2": "やまばといろ",
        "name3": "",
        'tag': ['JAPANESE']
    },
    {
        "hex": "#43676b",
        "name1": "御召茶",
        "name2": "おめしちゃ",
        "name3": "",
        'tag': ['JAPANESE']
    },
    {
        "hex": "#aa4c8f",
        "name1": "梅紫",
        "name2": "うめむらさき",
        "name3": "",
        'tag': ['JAPANESE']
    },
    {
        "hex": "#f2a0a1",
        "name1": "紅梅色",
        "name2": "こうばいいろ",
        "name3": "",
        'tag': ['JAPANESE']
    },
    {
        "hex": "#b68d4c",
        "name1": "黄橡",
        "name2": "きつるばみ",
        "name3": "",
        'tag': ['JAPANESE']
    },
    {
        "hex": "#888e7e",
        "name1": "利休鼠",
        "name2": "りきゅうねずみ",
        "name3": "",
        'tag': ['JAPANESE']
    },
    {
        "hex": "#80989b",
        "name1": "湊鼠",
        "name2": "みなとねずみ",
        "name3": "",
        'tag': ['JAPANESE']
    },
    {
        "hex": "#cc7eb1",
        "name1": "菖蒲色",
        "name2": "あやめいろ",
        "name3": "",
        'tag': ['JAPANESE']
    },
    {
        "hex": "#f0908d",
        "name1": "薄紅",
        "name2": "うすべに",
        "name3": "",
        'tag': ['JAPANESE']
    },
    {
        "hex": "#ad7d4c",
        "name1": "丁字染",
        "name2": "ちょうじぞめ",
        "name3": "",
        'tag': ['JAPANESE']
    },
    {
        "hex": "#5a544b",
        "name1": "海松茶",
        "name2": "みるちゃ",
        "name3": "",
        'tag': ['JAPANESE']
    },
    {
        "hex": "#2c4f54",
        "name1": "高麗納戸",
        "name2": "こうらいなんど",
        "name3": "",
        'tag': ['JAPANESE']
    },
    {
        "hex": "#cca6bf",
        "name1": "紅藤色",
        "name2": "べにふじいろ",
        "name3": "",
        'tag': ['JAPANESE']
    },
    {
        "hex": "#ee827c",
        "name1": "甚三紅",
        "name2": "じんざもみ",
        "name3": "",
        'tag': ['JAPANESE']
    },
    {
        "hex": "#ad7d4c",
        "name1": "香染",
        "name2": "こうぞめ",
        "name3": "",
        'tag': ['JAPANESE']
    },
    {
        "hex": "#56564b",
        "name1": "藍海松茶",
        "name2": "あいみるちゃ",
        "name3": "",
        'tag': ['JAPANESE']
    },
    {
        "hex": "#1f3134",
        "name1": "百入茶",
        "name2": "ももしおちゃ",
        "name3": "",
        'tag': ['JAPANESE']
    },
    {
        "hex": "#c4a3bf",
        "name1": "浅紫",
        "name2": "あさむらさき",
        "name3": "",
        'tag': ['JAPANESE']
    },
    {
        "hex": "#f09199",
        "name1": "桃色",
        "name2": "ももいろ",
        "name3": "",
        'tag': ['JAPANESE']
    },
    {
        "hex": "#ae7c4f",
        "name1": "枇杷茶",
        "name2": "びわちゃ",
        "name3": "",
        'tag': ['JAPANESE']
    },
    {
        "hex": "#555647",
        "name1": "藍媚茶",
        "name2": "あいこびちゃ",
        "name3": "",
        'tag': ['JAPANESE']
    },
    {
        "hex": "#47585c",
        "name1": "錆鼠",
        "name2": "さびねず",
        "name3": "",
        'tag': ['JAPANESE']
    },
    {
        "hex": "#e7e7eb",
        "name1": "紫水晶",
        "name2": "むらさきすいしょう",
        "name3": "",
        'tag': ['JAPANESE']
    },
    {
        "hex": "#f4b3c2",
        "name1": "鴇色",
        "name2": "ときいろ",
        "name3": "",
        'tag': ['JAPANESE']
    },
    {
        "hex": "#ad7e4e",
        "name1": "芝翫茶",
        "name2": "しかんちゃ",
        "name3": "",
        'tag': ['JAPANESE']
    },
    {
        "hex": "#494a41",
        "name1": "千歳茶",
        "name2": "せんさいちゃ",
        "name3": "",
        'tag': ['JAPANESE']
    },
    {
        "hex": "#485859",
        "name1": "錆鉄御納戸",
        "name2": "さびてつおなんど",
        "name3": "",
        'tag': ['JAPANESE']
    },
    {
        "hex": "#dcd6d9",
        "name1": "薄梅鼠",
        "name2": "うすうめねず",
        "name3": "",
        'tag': ['JAPANESE']
    },
    {
        "hex": "#eebbcb",
        "name1": "撫子色",
        "name2": "なでしこいろ",
        "name3": "",
        'tag': ['JAPANESE']
    },
    {
        "hex": "#ae7c58",
        "name1": "焦香",
        "name2": "こがれこう",
        "name3": "",
        'tag': ['JAPANESE']
    },
    {
        "hex": "#6b6f59",
        "name1": "岩井茶",
        "name2": "いわいちゃ",
        "name3": "",
        'tag': ['JAPANESE']
    },
    {
        "hex": "#6c848d",
        "name1": "藍鼠",
        "name2": "あいねず",
        "name3": "",
        'tag': ['JAPANESE']
    },
    {
        "hex": "#d3cfd9",
        "name1": "暁鼠",
        "name2": "あかつきねず",
        "name3": "",
        'tag': ['JAPANESE']
    },
    {
        "hex": "#e8d3c7",
        "name1": "灰梅",
        "name2": "はいうめ",
        "name3": "",
        'tag': ['JAPANESE']
    },
    {
        "hex": "#a86f4c",
        "name1": "胡桃色",
        "name2": "くるみいろ",
        "name3": "",
        'tag': ['JAPANESE']
    },
    {
        "hex": "#474b42",
        "name1": "仙斎茶",
        "name2": "せんさいちゃ",
        "name3": "",
        'tag': ['JAPANESE']
    },
    {
        "hex": "#53727d",
        "name1": "錆御納戸",
        "name2": "さびおなんど",
        "name3": "",
        'tag': ['JAPANESE']
    },
    {
        "hex": "#d3ccd6",
        "name1": "牡丹鼠",
        "name2": "ぼたんねず",
        "name3": "",
        'tag': ['JAPANESE']
    },
    {
        "hex": "#e8d3d1",
        "name1": "灰桜",
        "name2": "はいざくら",
        "name3": "",
        'tag': ['JAPANESE']
    },
    {
        "hex": "#946243",
        "name1": "渋紙色",
        "name2": "しぶかみいろ",
        "name3": "",
        'tag': ['JAPANESE']
    },
    {
        "hex": "#333631",
        "name1": "黒緑",
        "name2": "くろみどり",
        "name3": "",
        'tag': ['JAPANESE']
    },
    {
        "hex": "#5b7e91",
        "name1": "舛花色",
        "name2": "ますはないろ",
        "name3": "",
        'tag': ['JAPANESE']
    },
    {
        "hex": "#c8c2c6",
        "name1": "霞色",
        "name2": "かすみいろ",
        "name3": "",
        'tag': ['JAPANESE']
    },
    {
        "hex": "#e6cde3",
        "name1": "淡紅藤",
        "name2": "あわべにふじ",
        "name3": "",
        'tag': ['JAPANESE']
    },
    {
        "hex": "#917347",
        "name1": "朽葉色",
        "name2": "くちばいろ",
        "name3": "",
        'tag': ['JAPANESE']
    },
    {
        "hex": "#5b6356",
        "name1": "柳煤竹",
        "name2": "やなぎすすたけ",
        "name3": "",
        'tag': ['JAPANESE']
    },
    {
        "hex": "#426579",
        "name1": "熨斗目花色",
        "name2": "のしめはないろ",
        "name3": "",
        'tag': ['JAPANESE']
    },
    {
        "hex": "#a6a5c4",
        "name1": "藤鼠",
        "name2": "ふじねず",
        "name3": "",
        'tag': ['JAPANESE']
    },
    {
        "hex": "#e5abbe",
        "name1": "石竹色",
        "name2": "せきちくいろ",
        "name3": "",
        'tag': ['JAPANESE']
    },
    {
        "hex": "#956f29",
        "name1": "桑茶",
        "name2": "くわちゃ",
        "name3": "",
        'tag': ['JAPANESE']
    },
    {
        "hex": "#726250",
        "name1": "樺茶色",
        "name2": "かばちゃいろ",
        "name3": "",
        'tag': ['JAPANESE']
    },
    {
        "hex": "#4c6473",
        "name1": "御召御納戸",
        "name2": "おめしおなんど",
        "name3": "",
        'tag': ['JAPANESE']
    },
    {
        "hex": "#a69abd",
        "name1": "半色",
        "name2": "はしたいろ",
        "name3": "",
        'tag': ['JAPANESE']
    },
    {
        "hex": "#e597b2",
        "name1": "薄紅梅",
        "name2": "うすこうばい",
        "name3": "",
        'tag': ['JAPANESE']
      },
      {
        "hex": "#8c7042",
        "name1": "路考茶",
        "name2": "ろこうちゃ",
        "name3": "",
        'tag': ['JAPANESE']
      },
      {
        "hex": "#9d896c",
        "name1": "空五倍子色",
        "name2": "うつぶしいろ",
        "name3": "",
        'tag': ['JAPANESE']
      },
      {
        "hex": "#455765",
        "name1": "鉄御納戸",
        "name2": "てつおなんど",
        "name3": "",
        'tag': ['JAPANESE']
      },
      {
        "hex": "#a89dac",
        "name1": "薄色",
        "name2": "うすいろ",
        "name3": "",
        'tag': ['JAPANESE']
      },
      {
        "hex": "#e198b4",
        "name1": "桃花色",
        "name2": "ももはないろ",
        "name3": "",
        'tag': ['JAPANESE']
      },
      {
        "hex": "#7b6c3e",
        "name1": "国防色",
        "name2": "こくぼうしょく",
        "name3": "",
        'tag': ['JAPANESE']
      },
      {
        "hex": "#94846a",
        "name1": "生壁色",
        "name2": "なまかべいろ",
        "name3": "",
        'tag': ['JAPANESE']
      },
      {
        "hex": "#44617b",
        "name1": "紺鼠",
        "name2": "こんねず",
        "name3": "",
        'tag': ['JAPANESE']
      },
      {
        "hex": "#9790a4",
        "name1": "薄鼠",
        "name2": "うすねず",
        "name3": "",
        'tag': ['JAPANESE']
      },
      {
        "hex": "#e4ab9b",
        "name1": "水柿",
        "name2": "みずがき",
        "name3": "",
        'tag': ['JAPANESE']
      },
      {
        "hex": "#d8a373",
        "name1": "伽羅色",
        "name2": "きゃらいろ",
        "name3": "",
        'tag': ['JAPANESE']
      },
      {
        "hex": "#897858",
        "name1": "肥後煤竹",
        "name2": "ひごすすたけ",
        "name3": "",
        'tag': ['JAPANESE']
      },
      {
        "hex": "#393f4c",
        "name1": "藍鉄",
        "name2": "あいてつ",
        "name3": "",
        'tag': ['JAPANESE']
      },
      {
        "hex": "#9e8b8e",
        "name1": "鳩羽鼠",
        "name2": "はとばねずみ",
        "name3": "",
        'tag': ['JAPANESE']
      },
      {
        "hex": "#e09e87",
        "name1": "ときがら茶",
        "name2": "ときがらちゃ",
        "name3": "",
        'tag': ['JAPANESE']
      },
      {
        "hex": "#cd8c5c",
        "name1": "江戸茶",
        "name2": "えどちゃ",
        "name3": "",
        'tag': ['JAPANESE']
      },
      {
        "hex": "#716246",
        "name1": "媚茶",
        "name2": "こびちゃ",
        "name3": "",
        'tag': ['JAPANESE']
      },
      {
        "hex": "#393e4f",
        "name1": "青褐",
        "name2": "あおかち",
        "name3": "",
        'tag': ['JAPANESE']
      },
      {
        "hex": "#95859c",
        "name1": "鳩羽色",
        "name2": "はとばねず",
        "name3": "",
        'tag': ['JAPANESE']
      },
      {
        "hex": "#d69090",
        "name1": "退紅",
        "name2": "あらぞめ",
        "name3": "",
        'tag': ['JAPANESE']
      },
      {
        "hex": "#cd5e3c",
        "name1": "樺色",
        "name2": "かばいろ",
        "name3": "",
        'tag': ['JAPANESE']
      },
      {
        "hex": "#cbb994",
        "name1": "白橡",
        "name2": "しろつるばみ",
        "name3": "",
        'tag': ['JAPANESE']
      },
      {
        "hex": "#203744",
        "name1": "褐返",
        "name2": "かちかえし",
        "name3": "",
        'tag': ['JAPANESE']
      },
      {
        "hex": "#95949a",
        "name1": "桔梗鼠",
        "name2": "ききょうねず",
        "name3": "",
        'tag': ['JAPANESE']
      },
      {
        "hex": "#d4acad",
        "name1": "薄柿",
        "name2": "うすがき",
        "name3": "",
        'tag': ['JAPANESE']
      },
      {
        "hex": "#cb8347",
        "name1": "紅鬱金",
        "name2": "べにうこん",
        "name3": "",
        'tag': ['JAPANESE']
      },
      {
        "hex": "#d6c6af",
        "name1": "亜麻色",
        "name2": "あまいろ",
        "name3": "",
        'tag': ['JAPANESE']
      },
      {
        "hex": "#4d4c61",
        "name1": "褐色",
        "name2": "かちいろ",
        "name3": "",
        'tag': ['JAPANESE']
      },
      {
        "hex": "#71686c",
        "name1": "紫鼠",
        "name2": "むらさきねず",
        "name3": "",
        'tag': ['JAPANESE']
      },
      {
        "hex": "#c97586",
        "name1": "長春色",
        "name2": "ちょうしゅんいろ",
        "name3": "",
        'tag': ['JAPANESE']
      },
      {
        "hex": "#c37854",
        "name1": "土器色",
        "name2": "かわらけいろ",
        "name3": "",
        "tag": ["JAPANESE"]
      },
      {
        "hex": "#bfa46f",
        "name1": "榛色",
        "name2": "はしばみいろ",
        "name3": "",
        "tag": ["JAPANESE"]
      },
      {
        "hex": "#eaf4fc",
        "name1": "月白",
        "name2": "げっぱく",
        "name3": "",
        "tag": ["JAPANESE"]
      },
      {
        "hex": "#705b67",
        "name1": "葡萄鼠",
        "name2": "ぶどうねずみ",
        "name3": "",
        "tag": ["JAPANESE"]
      },
      {
        "hex": "#c099a0",
        "name1": "梅鼠",
        "name2": "うめねず",
        "name3": "",
        "tag": ["JAPANESE"]
      },
      {
        "hex": "#c38743",
        "name1": "狐色",
        "name2": "きつねいろ",
        "name3": "",
        "tag": ["JAPANESE"]
      },
      {
        "hex": "#9e9478",
        "name1": "灰汁色",
        "name2": "あくいろ",
        "name3": "",
        "tag": ["JAPANESE"]
      },
      {
        "hex": "#eaedf7",
        "name1": "白菫色",
        "name2": "しろすみれいろ",
        "name3": "",
        "tag": ["JAPANESE"]
      },
      {
        "hex": "#634950",
        "name1": "濃色",
        "name2": "こきいろ",
        "name3": "",
        "tag": ["JAPANESE"]
      },
      {
        "hex": "#b88884",
        "name1": "鴇浅葱",
        "name2": "ときあさぎ",
        "name3": "",
        "tag": ["JAPANESE"]
      },
      {
        "hex": "#c39143",
        "name1": "黄土色",
        "name2": "おうどいろ",
        "name3": "",
        "tag": ["JAPANESE"]
      },
      {
        "hex": "#a59564",
        "name1": "利休茶",
        "name2": "りきゅうちゃ",
        "name3": "",
        "tag": ["JAPANESE"]
      },
      {
        "hex": "#e8ecef",
        "name1": "白花色",
        "name2": "しらはないろ",
        "name3": "",
        "tag": ["JAPANESE"]
      },
      {
        "hex": "#5f414b",
        "name1": "紫鳶",
        "name2": "むらさきとび",
        "name3": "",
        "tag": ["JAPANESE"]
      },
      {
        "hex": "#b48a76",
        "name1": "梅染",
        "name2": "うめぞめ",
        "name3": "",
        "tag": ["JAPANESE"]
      },
      {
        "hex": "#bf783a",
        "name1": "琥珀色",
        "name2": "こはくいろ",
        "name3": "",
        "tag": ["JAPANESE"]
      },
      {
        "hex": "#715c1f",
        "name1": "鶯茶",
        "name2": "うぐいすちゃ",
        "name3": "",
        "tag": ["JAPANESE"]
      },
      {
        "hex": "#ebf6f7",
        "name1": "藍白",
        "name2": "あいじろ",
        "name3": "",
        "tag": ["JAPANESE"]
      },
      {
        "hex": "#4f455c",
        "name1": "濃鼠",
        "name2": "こいねず",
        "name3": "",
        'tag': ['JAPANESE']
      },
      {
        "hex": "#a86965",
        "name1": "蘇芳香",
        "name2": "すおうこう",
        "name3": "",
        'tag': ['JAPANESE']
      },
      {
        "hex": "#bb5535",
        "name1": "赤茶",
        "name2": "あかちゃ",
        "name3": "",
        'tag': ['JAPANESE']
      },
      {
        "hex": "#c7b370",
        "name1": "木蘭色",
        "name2": "もくらんじき",
        "name3": "",
        'tag': ['JAPANESE']
      },
      {
        "hex": "#c1e4e9",
        "name1": "白藍",
        "name2": "しらあい",
        "name3": "",
        'tag': ['JAPANESE']
      },
      {
        "hex": "#5a5359",
        "name1": "藤煤竹",
        "name2": "ふじすすたけ",
        "name3": "",
        'tag': ['JAPANESE']
      },
      {
        "hex": "#a25768",
        "name1": "浅蘇芳",
        "name2": "あさすおう",
        "name3": "",
        'tag': ['JAPANESE']
      },
      {
        "hex": "#bb5520",
        "name1": "代赭",
        "name2": "たいしゃ",
        "name3": "",
        'tag': ['JAPANESE']
      },
      {
        "hex": "#dcd3b2",
        "name1": "砂色",
        "name2": "すないろ",
        "name3": "",
        'tag': ['JAPANESE']
      },
      {
        "hex": "#bce2e8",
        "name1": "水色",
        "name2": "みずいろ",
        "name3": "",
        'tag': ['JAPANESE']
      },
      {
        "hex": "#594255",
        "name1": "滅紫",
        "name2": "けしむらさき",
        "name3": "",
        'tag': ['JAPANESE']
      },
      {
        "hex": "#ec6d71",
        "name1": "真朱",
        "name2": "まそお",
        "name3": "",
        'tag': ['JAPANESE']
      },
      {
        "hex": "#b55233",
        "name1": "煉瓦色",
        "name2": "れんがいろ",
        "name3": "",
        'tag': ['JAPANESE']
      },
      {
        "hex": "#a19361",
        "name1": "油色",
        "name2": "あぶらいろ",
        "name3": "",
        'tag': ['JAPANESE']
      },
      {
        "hex": "#a2d7dd",
        "name1": "瓶覗",
        "name2": "かめのぞき",
        "name3": "",
        'tag': ['JAPANESE']
      },
      {
        "hex": "#524748",
        "name1": "紅消鼠",
        "name2": "べにけしねずみ",
        "name3": "",
        'tag': ['JAPANESE']
      },
      {
        "hex": "#eb6ea5",
        "name1": "赤紫",
        "name2": "あかむらさき",
        "name3": "",
        'tag': ['JAPANESE']
      },
      {
        "hex": "#aa4f37",
        "name1": "雀茶",
        "name2": "すずめちゃ",
        "name3": "",
        'tag': ['JAPANESE']
      },
      {
        "hex": "#8f8667",
        "name1": "利休色",
        "name2": "りきゅういろ",
        "name3": "",
        'tag': ['JAPANESE']
      },
      {
        "hex": "#abced8",
        "name1": "秘色色",
        "name2": "ひそくいろ",
        "name3": "",
        'tag': ['JAPANESE']
      },
      {
        "hex": "#513743",
        "name1": "似せ紫",
        "name2": "にせむらさき",
        "name3": "",
        'tag': ['JAPANESE']
      },
      {
        "hex": "#e95295",
        "name1": "躑躅色",
        "name2": "つつじいろ",
        "name3": "",
        'tag': ['JAPANESE']
      },
      {
        "hex": "#9f563a",
        "name1": "団十郎茶",
        "name2": "だんじゅうろうちゃ",
        "name3": "",
        'tag': ['JAPANESE']
      },
      {
        "hex": "#887938",
        "name1": "梅幸茶",
        "name2": "ばいこうちゃ",
        "name3": "",
        'tag': ['JAPANESE']
      },
      {
        "hex": "#a0d8ef",
        "name1": "空色",
        "name2": "そらいろ",
        "name3": "",
        'tag': ['JAPANESE']
      },
      {
        "hex": "#e6eae3",
        "name1": "灰黄緑",
        "name2": "はいきみどり",
        "name3": "",
        'tag': ['JAPANESE']
      },
      {
        "hex": "#e7609e",
        "name1": "牡丹色",
        "name2": "ぼたんいろ",
        "name3": "",
        'tag': ['JAPANESE']
      },
      {
        "hex": "#9f563a",
        "name1": "柿渋色",
        "name2": "かきしぶいろ",
        "name3": "",
        'tag': ['JAPANESE']
      },
      {
        "hex": "#6a5d21",
        "name1": "璃寛茶",
        "name2": "りかんちゃ",
        "name3": "",
        'tag': ['JAPANESE']
      },
      {
        "hex": "#89c3eb",
        "name1": "勿忘草色",
        "name2": "わすれなぐさいろ",
        "name3": "",
        'tag': ['JAPANESE']
      },
      {
        "hex": "#d4dcd6",
        "name1": "蕎麦切色",
        "name2": "そばきりいろ",
        "name3": "",
        'tag': ['JAPANESE']
      },
      {
        "hex": "#d0576b",
        "name1": "今様色",
        "name2": "いまよういろ",
        "name3": "",
        'tag': ['JAPANESE']
      },
      {
        "hex": "#9a493f",
        "name1": "紅鳶",
        "name2": "べにとび",
        "name3": "",
        'tag': ['JAPANESE']
      },
      {
        "hex": "#918754",
        "name1": "黄海松茶",
        "name2": "きみるちゃ",
        "name3": "",
        'tag': ['JAPANESE']
      },
      {
        "hex": "#84a2d4",
        "name1": "青藤色",
        "name2": "あおふじいろ",
        "name3": "",
        'tag': ['JAPANESE']
      },
      {
        "hex": "#d4dcda",
        "name1": "薄雲鼠",
        "name2": "うすくもねず",
        "name3": "",
        'tag': ['JAPANESE']
      },
      {
        "hex": "#c85179",
        "name1": "中紅",
        "name2": "なかべに",
        "name3": "",
        'tag': ['JAPANESE']
      },
      {
        "hex": "#98623c",
        "name1": "灰茶",
        "name2": "はいちゃ",
        "name3": "",
        'tag': ['JAPANESE']
      },
      {
        "hex": "#a69425",
        "name1": "菜種油色",
        "name2": "なたねゆいろ",
        "name3": "",
        'tag': ['JAPANESE']
      },
      {
        "hex": "#83ccd2",
        "name1": "白群",
        "name2": "びゃくぐん",
        "name3": "",
        'tag': ['JAPANESE']
      },
      {
        "hex": "#d3cbc6",
        "name1": "枯野色",
        "name2": "かれのいろ",
        "name3": "",
        'tag': ['JAPANESE']
      },
      {
        "hex": "#e9546b",
        "name1": "薔薇色",
        "name2": "ばらいろ",
        "name3": "",
        'tag': ['JAPANESE']
      },
      {
        "hex": "#965042",
        "name1": "茶色",
        "name2": "ちゃいろ",
        "name3": "",
        'tag': ['JAPANESE']
      },
      {
        "hex": "#ada250",
        "name1": "青朽葉",
        "name2": "あおくちば",
        "name3": "",
        'tag': ['JAPANESE']
      },
      {
        "hex": "#84b9cb",
        "name1": "浅縹",
        "name2": "あさはなだ",
        "name3": "",
        'tag': ['JAPANESE']
      },
      {
        "hex": "#c8c2be",
        "name1": "潤色",
        "name2": "うるみいろ",
        "name3": "",
        'tag': ['JAPANESE']
      },
      {
        "hex": "#e95464",
        "name1": "韓紅",
        "name2": "からくれない",
        "name3": "",
        'tag': ['JAPANESE']
      },
      {
        "hex": "#965036",
        "name1": "檜皮色",
        "name2": "ひわだいろ",
        "name3": "",
        'tag': ['JAPANESE']
      },
      {
        "hex": "#938b4b",
        "name1": "根岸色",
        "name2": "ねぎしいろ",
        "name3": "",
        'tag': ['JAPANESE']
      },
      {
        "hex": "#698aab",
        "name1": "薄花色",
        "name2": "うすはないろ",
        "name3": "",
        'tag': ['JAPANESE']
      },
      {
        "hex": "#b3ada0",
        "name1": "利休白茶",
        "name2": "りきゅうしろちゃ",
        "name3": "",
        'tag': ['JAPANESE']
      },
      {
        "hex": "#c85554",
        "name1": "銀朱",
        "name2": "ぎんしゅ",
        "name3": "",
        'tag': ['JAPANESE']
      },
      {
        "hex": "#95483f",
        "name1": "鳶色",
        "name2": "とびいろ",
        "name3": "",
        'tag': ['JAPANESE']
      },
      {
        "hex": "#8c8861",
        "name1": "鶸茶",
        "name2": "ひわちゃ",
        "name3": "",
        'tag': ['JAPANESE']
      },
      {
        "hex": "#008899",
        "name1": "納戸色",
        "name2": "なんどいろ",
        "name3": "",
        'tag': ['JAPANESE']
      },
      {
        "hex": "#a99e93",
        "name1": "茶鼠",
        "name2": "ちゃねずみ",
        "name3": "",
        'tag': ['JAPANESE']
      },
      {
        "hex": "#c53d43",
        "name1": "赤紅",
        "name2": "あかべに",
        "name3": "",
        'tag': ['JAPANESE']
      },
      {
        "hex": "#954e2a",
        "name1": "柿茶",
        "name2": "かきちゃ",
        "name3": "",
        'tag': ['JAPANESE']
      },
      {
        "hex": "#a1a46d",
        "name1": "柳茶",
        "name2": "やなぎちゃ",
        "name3": "",
        'tag': ['JAPANESE']
      },
      {
        "hex": "#00a3af",
        "name1": "浅葱色",
        "name2": "あさぎいろ",
        "name3": "",
        'tag': ['JAPANESE']
      },
      {
        "hex": "#a58f86",
        "name1": "胡桃染",
        "name2": "くるみぞめ",
        "name3": "",
        'tag': ['JAPANESE']
      },
      {
        "hex": "#e83929",
        "name1": "紅緋",
        "name2": "べにひ",
        "name3": "",
        'tag': ['JAPANESE']
      },
      {
        "hex": "#8f2e14",
        "name1": "弁柄色",
        "name2": "べんがらいろ",
        "name3": "",
        'tag': ['JAPANESE']
      },
      {
        "hex": "#726d40",
        "name1": "海松色",
        "name2": "みるいろ",
        "name3": "",
        'tag': ['JAPANESE']
      },
      {
        "hex": "#2a83a2",
        "name1": "花浅葱",
        "name2": "はなあさぎ",
        "name3": "",
        "tag": ["JAPANESE"]
      },
      {
        "hex": "#928178",
        "name1": "江戸鼠",
        "name2": "えどねず",
        "name3": "",
        "tag": ["JAPANESE"]
      },
      {
        "hex": "#e60033",
        "name1": "赤",
        "name2": "あか",
        "name3": "",
        "tag": ["JAPANESE"]
      },
      {
        "hex": "#8a3319",
        "name1": "赤錆色",
        "name2": "あかさびいろ",
        "name3": "",
        "tag": ["JAPANESE"]
      },
      {
        "hex": "#928c36",
        "name1": "鶯色",
        "name2": "うぐいすいろ",
        "name3": "",
        "tag": ["JAPANESE"]
      },
      {
        "hex": "#59b9c6",
        "name1": "新橋色",
        "name2": "しんばしいろ",
        "name3": "",
        "tag": ["JAPANESE"]
      },
      {
        "hex": "#887f7a",
        "name1": "煤色",
        "name2": "すすいろ",
        "name3": "",
        "tag": ["JAPANESE"]
      },
      {
        "hex": "#e2041b",
        "name1": "猩々緋",
        "name2": "しょうじょうひ",
        "name3": "",
        "tag": ["JAPANESE"]
      },
      {
        "hex": "#8a3b00",
        "name1": "褐色",
        "name2": "かっしょく",
        "name3": "",
        "tag": ["JAPANESE"]
      },
      {
        "hex": "#dccb18",
        "name1": "緑黄色",
        "name2": "りょくおうしょく",
        "name3": "",
        "tag": ["JAPANESE"]
      },
      {
        "hex": "#2ca9e1",
        "name1": "天色",
        "name2": "あまいろ",
        "name3": "",
        "tag": ["JAPANESE"]
      },
      {
        "hex": "#b4866b",
        "name1": "丁子茶",
        "name2": "ちょうじちゃ",
        "name3": "",
        "tag": ["JAPANESE"]
      },
      {
        "hex": "#d7003a",
        "name1": "紅",
        "name2": "くれない",
        "name3": "",
        "tag": ["JAPANESE"]
      },
      {
        "hex": "#852e19",
        "name1": "栗梅",
        "name2": "くりうめ",
        "name3": "",
        "tag": ["JAPANESE"]
      },
      {
        "hex": "#d7cf3a",
        "name1": "鶸色",
        "name2": "ひわいろ",
        "name3": "",
        "tag": ["JAPANESE"]
      },
      {
        "hex": "#38a1db",
        "name1": "露草色",
        "name2": "つゆくさいろ",
        "name3": "",
        "tag": ["JAPANESE"]
      },
      {
        "hex": "#b28c6e",
        "name1": "柴染",
        "name2": "ふしぞめ",
        "name3": "",
        "tag": ["JAPANESE"]
      },
      {
        "hex": "#c9171e",
        "name1": "深緋",
        "name2": "こきひ",
        "name3": "",
        "tag": ["JAPANESE"]
      },
      {
        "hex": "#7b4741",
        "name1": "紅檜皮",
        "name2": "べにひはだ",
        "name3": "",
        "tag": ["JAPANESE"]
      },
      {
        "hex": "#c5c56a",
        "name1": "抹茶色",
        "name2": "まっちゃいろ",
        "name3": "",
        "tag": ["JAPANESE"]
      },
      {
        "hex": "#0095d9",
        "name1": "青",
        "name2": "あお",
        "name3": "",
        "tag": ["JAPANESE"]
      },
      {
        "hex": "#a16d5d",
        "name1": "宗伝唐茶",
        "name2": "そうでんからちゃ",
        "name3": "",
        "tag": ["JAPANESE"]
      },
      {
        "hex": "#d3381c",
        "name1": "緋色",
        "name2": "ひいろ",
        "name3": "",
        "tag": ["JAPANESE"]
      },
      {
        "hex": "#773c30",
        "name1": "海老茶",
        "name2": "えびちゃ",
        "name3": "",
        "tag": ["JAPANESE"]
      },
      {
        "hex": "#c3d825",
        "name1": "若草色",
        "name2": "わかくさいろ",
        "name3": "",
        "tag": ["JAPANESE"]
      },
      {
        "hex": "#0094c8",
        "name1": "薄藍",
        "name2": "うすあい",
        "name3": "",
        "tag": ["JAPANESE"]
      },
      {
        "hex": "#9f6f55",
        "name1": "砺茶",
        "name2": "とのちゃ",
        "name3": "",
        "tag": ["JAPANESE"]
      },
      {
        "hex": "#ce5242",
        "name1": "赤丹",
        "name2": "あかに",
        "name3": "",
        "tag": ["JAPANESE"]
      },
      {
        "hex": "#783c1d",
        "name1": "唐茶",
        "name2": "からちゃ",
        "name3": "",
        "tag": ["JAPANESE"]
      },
      {
        "hex": "#b8d200",
        "name1": "黄緑",
        "name2": "きみどり",
        "name3": "",
        "tag": ["JAPANESE"]
      },
      {
        "hex": "#2792c3",
        "name1": "縹色",
        "name2": "はなだいろ",
        "name3": "",
        "tag": ["JAPANESE"]
      },
      {
        "hex": "#8c6450",
        "name1": "煎茶色",
        "name2": "せんちゃいろ",
        "name3": "",
        "tag": ["JAPANESE"]
      },
      {
        "hex": "#d9333f",
        "name1": "紅赤",
        "name2": "べにあか",
        "name3": "",
        "tag": ["JAPANESE"]
      },
      {
        "hex": "#762f07",
        "name1": "栗色",
        "name2": "くりいろ",
        "name3": "",
        "tag": ["JAPANESE"]
      },
      {
        "hex": "#e0ebaf",
        "name1": "若芽色",
        "name2": "わかめいろ",
        "name3": "",
        "tag": ["JAPANESE"]
      },
      {
        "hex": "#007bbb",
        "name1": "紺碧",
        "name2": "こんぺき",
        "name3": "",
        "tag": ["JAPANESE"]
      },
      {
        "hex": "#856859",
        "name1": "銀煤竹",
        "name2": "ぎんすすだけ",
        "name3": "",
        'tag': ['JAPANESE']
      },
      {
        "hex": "#b94047",
        "name1": "臙脂",
        "name2": "えんじ",
        "name3": "",
        'tag': ['JAPANESE']
      },
      {
        "hex": "#752100",
        "name1": "赤銅色",
        "name2": "しゃくどういろ",
        "name3": "",
        'tag': ['JAPANESE']
      },
      {
        "hex": "#d8e698",
        "name1": "若菜色",
        "name2": "わかないろ",
        "name3": "",
        'tag': ['JAPANESE']
      },
      {
        "hex": "#5383c3",
        "name1": "薄群青",
        "name2": "うすぐんじょう",
        "name3": "",
        'tag': ['JAPANESE']
      },
      {
        "hex": "#765c47",
        "name1": "黄枯茶",
        "name2": "きがらちゃ",
        "name3": "",
        'tag': ['JAPANESE']
      },
      {
        "hex": "#ba2636",
        "name1": "朱・緋",
        "name2": "あけ",
        "name3": "",
        'tag': ['JAPANESE']
      },
      {
        "hex": "#6c3524",
        "name1": "錆色",
        "name2": "さびいろ",
        "name3": "",
        'tag': ['JAPANESE']
      },
      {
        "hex": "#c7dc68",
        "name1": "若苗色",
        "name2": "わかなえいろ",
        "name3": "",
        'tag': ['JAPANESE']
      },
      {
        "hex": "#5a79ba",
        "name1": "薄花桜",
        "name2": "うすはなざくら",
        "name3": "",
        'tag': ['JAPANESE']
      },
      {
        "hex": "#6f514c",
        "name1": "煤竹色",
        "name2": "すすたけいろ",
        "name3": "",
        'tag': ['JAPANESE']
      },
      {
        "hex": "#b7282e",
        "name1": "茜色",
        "name2": "あかねいろ",
        "name3": "",
        'tag': ['JAPANESE']
      },
      {
        "hex": "#683f36",
        "name1": "赤褐色",
        "name2": "せっかっしょく",
        "name3": "",
        'tag': ['JAPANESE']
      },
      {
        "hex": "#99ab4e",
        "name1": "青丹",
        "name2": "あおに",
        "name3": "",
        'tag': ['JAPANESE']
      },
      {
        "hex": "#4c6cb3",
        "name1": "群青色",
        "name2": "ぐんじょういろ",
        "name3": "",
        'tag': ['JAPANESE']
      },
      {
        "hex": "#6f4b3e",
        "name1": "焦茶",
        "name2": "こげちゃ",
        "name3": "",
        'tag': ['JAPANESE']
      },
      {
        "hex": "#a73836",
        "name1": "紅海老茶",
        "name2": "べにえびちゃ",
        "name3": "",
        'tag': ['JAPANESE']
      },
      {
        "hex": "#664032",
        "name1": "茶褐色",
        "name2": "ちゃかっしょく",
        "name3": "",
        'tag': ['JAPANESE']
      },
      {
        "hex": "#7b8d42",
        "name1": "草色",
        "name2": "くさいろ",
        "name3": "",
        'tag': ['JAPANESE']
      },
      {
        "hex": "#3e62ad",
        "name1": "杜若色",
        "name2": "かきつばたいろ",
        "name3": "",
        'tag': ['JAPANESE']
      },
      {
        "hex": "#544a47",
        "name1": "黒橡",
        "name2": "くろつるばみ",
        "name3": "",
        'tag': ['JAPANESE']
      },
      {
        "hex": "#9e3d3f",
        "name1": "蘇芳",
        "name2": "すおう",
        "name3": "",
        'tag': ['JAPANESE']
      },
      {
        "hex": "#6d3c32",
        "name1": "栗皮茶",
        "name2": "くりかわちゃ",
        "name3": "",
        'tag': ['JAPANESE']
      },
      {
        "hex": "#69821b",
        "name1": "苔色",
        "name2": "こけいろ",
        "name3": "",
        'tag': ['JAPANESE']
      },
      {
        "hex": "#1e50a2",
        "name1": "瑠璃色",
        "name2": "るりいろ",
        "name3": "",
        'tag': ['JAPANESE']
      },
      {
        "hex": "#543f32",
        "name1": "憲法色",
        "name2": "けんぽういろ",
        "name3": "",
        'tag': ['JAPANESE']
      },
      {
        "hex": "#a22041",
        "name1": "真紅",
        "name2": "しんく",
        "name3": "",
        'tag': ['JAPANESE']
      },
      {
        "hex": "#583822",
        "name1": "黒茶",
        "name2": "くろちゃ",
        "name3": "",
        'tag': ['JAPANESE']
      },
      {
        "hex": "#aacf53",
        "name1": "萌黄",
        "name2": "もえぎ",
        "name3": "",
        'tag': ['JAPANESE']
      },
      {
        "hex": "#507ea4",
        "name1": "薄縹",
        "name2": "うすはなだ",
        "name3": "",
        'tag': ['JAPANESE']
      },
      {
        "hex": "#554738",
        "name1": "涅色",
        "name2": "くりいろ",
        "name3": "",
        'tag': ['JAPANESE']
      },
      {
        "hex": "#a22041",
        "name1": "濃紅",
        "name2": "こいくれない",
        "name3": "",
        'tag': ['JAPANESE']
      },
      {
        "hex": "#6c2c2f",
        "name1": "葡萄茶",
        "name2": "えびちゃ",
        "name3": "",
        'tag': ['JAPANESE']
      },
      {
        "hex": "#b0ca71",
        "name1": "苗色",
        "name2": "なえいろ",
        "name3": "",
        'tag': ['JAPANESE']
      },
      {
        "hex": "#19448e",
        "name1": "瑠璃紺",
        "name2": "るりこん",
        "name3": "",
        'tag': ['JAPANESE']
      },
      {
        "hex": "#433d3c",
        "name1": "檳榔子染",
        "name2": "びんろうじぞめ",
        "name3": "",
        'tag': ['JAPANESE']
      },
      {
        "hex": "#f8f4e6",
        "name1": "象牙色",
        "name2": "ぞうげいろ",
        "name3": "",
        'tag': ['JAPANESE']
      },
      {
        "hex": "#640125",
        "name1": "葡萄色",
        "name2": "えびいろ",
        "name3": "",
        'tag': ['JAPANESE']
      },
      {
        "hex": "#b9d08b",
        "name1": "若葉色",
        "name2": "わかばいろ",
        "name3": "",
        'tag': ['JAPANESE']
      },
      {
        "hex": "#164a84",
        "name1": "紺瑠璃",
        "name2": "こんるり",
        "name3": "",
        'tag': ['JAPANESE']
      },
      {
        "hex": "#164a84",
        "name1": "黒鳶",
        "name2": "くろとび",
        "name3": "",
        'tag': ['JAPANESE']
      },
      {
        "hex": "#432f2f",
        "name1": "練色",
        "name2": "ねりいろ",
        "name3": "",
        'tag': ['JAPANESE']
      },
      {
        "hex": "#ede4cd",
        "name1": "萱草色",
        "name2": "かんぞういろ",
        "name3": "",
        'tag': ['JAPANESE']
      },
      {
        "hex": "#f8b862",
        "name1": "松葉色",
        "name2": "まつばいろ",
        "name3": "",
        'tag': ['JAPANESE']
      },
      {
        "hex": "#839b5c",
        "name1": "藍色",
        "name2": "あいいろ",
        "name3": "",
        'tag': ['JAPANESE']
      },
      {
        "hex": "#165e83",
        "name1": "赤墨",
        "name2": "あかすみ",
        "name3": "",
        'tag': ['JAPANESE']
      },
      {
        "hex": "#3f312b",
        "name1": "灰白色",
        "name2": "かいはくしょく",
        "name3": "",
        'tag': ['JAPANESE']
      },
      {
        "hex": "#e9e4d4",
        "name1": "柑子色",
        "name2": "こうじいろ",
        "name3": "",
        'tag': ['JAPANESE']
      },
      {
        "hex": "#f6ad49",
        "name1": "夏虫色",
        "name2": "なつむしいろ",
        "name3": "",
        'tag': ['JAPANESE']
      },
      {
        "hex": "#cee4ae",
        "name1": "青藍",
        "name2": "せいらん",
        "name3": "",
        'tag': ['JAPANESE']
      },
      {
        "hex": "#274a78",
        "name1": "黒紅",
        "name2": "くろべに",
        "name3": "",
        'tag': ['JAPANESE']
      },
      {
        "hex": "#302833",
        "name1": "蒸栗色",
        "name2": "むしぐりいろ",
        "name3": "",
        'tag': ['JAPANESE']
      },
      {
        "hex": "#ebe1a9",
        "name1": "金茶",
        "name2": "きんちゃ",
        "name3": "",
        'tag': ['JAPANESE']
      },
      {
        "hex": "#f39800",
        "name1": "鶸萌黄",
        "name2": "ひわもえぎ",
        "name3": "",
        'tag': ['JAPANESE']
      },
      {
        "hex": "#82ae46",
        "name1": "深縹",
        "name2": "こきはなだ",
        "name3": "",
        'tag': ['JAPANESE']
      },
      {
        "hex": "#2a4073",
        "name1": "白",
        "name2": "しろ",
        "name3": "",
        'tag': ['JAPANESE']
      },
      {
        "hex": "#ffffff",
        "name1": "女郎花",
        "name2": "おみなえし",
        "name3": "",
        'tag': ['JAPANESE']
      },
      {
        "hex": "#f2f2b0",
        "name1": "蜜柑色",
        "name2": "みかんいろ",
        "name3": "",
        'tag': ['JAPANESE']
      },
      {
        "hex": "#f08300",
        "name1": "柳色",
        "name2": "やなぎいろ",
        "name3": "",
        'tag': ['JAPANESE']
      },
      {
        "hex": "#a8c97f",
        "name1": "紺色",
        "name2": "こんいろ",
        "name3": "",
        'tag': ['JAPANESE']
      },
      {
        "hex": "#223a70",
        "name1": "胡粉色",
        "name2": "ごふんいろ",
        "name3": "",
        'tag': ['JAPANESE']
      },
      {
        "hex": "#fffffc",
        "name1": "枯草色",
        "name2": "かれくさいろ",
        "name3": "",
        'tag': ['JAPANESE']
      },
      {
        "hex": "#e4dc8a",
        "name1": "鉛丹色",
        "name2": "えんたんいろ",
        "name3": "",
        'tag': ['JAPANESE']
      },
      {
        "hex": "#ec6d51",
        "name1": "青白橡",
        "name2": "あおしろつるばみ",
        "name3": "",
        'tag': ['JAPANESE']
      },
      {
        "hex": "#9ba88d",
        "name1": "紺青",
        "name2": "こんじょう",
        "name3": "",
        'tag': ['JAPANESE']
      },
      {
        "hex": "#192f60",
        "name1": "卯の花色",
        "name2": "うのはないろ",
        "name3": "",
        'tag': ['JAPANESE']
      },
      {
        "hex": "#f7fcfe",
        "name1": "淡黄",
        "name2": "たんこう",
        "name3": "",
        'tag': ['JAPANESE']
      },
      {
        "hex": "#f8e58c",
        "name1": "黄丹",
        "name2": "おうに",
        "name3": "",
        'tag': ['JAPANESE']
      },
      {
        "hex": "#ee7948",
        "name1": "柳鼠",
        "name2": "やなぎねず",
        "name3": "",
        'tag': ['JAPANESE']
      },
      {
        "hex": "#c8d5bb",
        "name1": "留紺",
        "name2": "とめこん",
        "name3": "",
        'tag': ['JAPANESE']
      },
      {
        "hex": "#1c305c",
        "name1": "白磁",
        "name2": "はくじ",
        "name3": "",
        'tag': ['JAPANESE']
      },
      {
        "hex": "#f8fbf8",
        "name1": "白茶",
        "name2": "しらちゃ",
        "name3": "",
        'tag': ['JAPANESE']
      },
      {
        "hex": "#ddbb99",
        "name1": "柿色",
        "name2": "かきいろ",
        "name3": "",
        'tag': ['JAPANESE']
      },
      {
        "hex": "#ed6d3d",
        "name1": "裏葉柳",
        "name2": "うらはやなぎ",
        "name3": "",
        'tag': ['JAPANESE']
      },
      {
        "hex": "#c1d8ac",
        "name1": "濃藍",
        "name2": "こいあい",
        "name3": "",
        'tag': ['JAPANESE']
      },
      {
        "hex": "#0f2350",
        "name1": "生成り色",
        "name2": "きなりいろ",
        "name3": "",
        'tag': ['JAPANESE']
      },
      {
        "hex": "#fbfaf5",
        "name1": "赤白橡",
        "name2": "あかしろつるばみ",
        "name3": "",
        'tag': ['JAPANESE']
      },
      {
        "hex": "#d7a98c",
        "name1": "黄赤",
        "name2": "きあか",
        "name3": "",
        'tag': ['JAPANESE']
      },
      {
        "hex": "#ec6800",
        "name1": "山葵色",
        "name2": "わさびいろ",
        "name3": "",
        'tag': ['JAPANESE']
      },
      {
        "hex": "#a8bf93",
        "name1": "鉄紺",
        "name2": "てつこん",
        "name3": "",
        'tag': ['JAPANESE']
      },
      {
        "hex": "#17184b",
        "name1": "乳白色",
        "name2": "にゅうはくしょく",
        "name3": "",
        'tag': ['JAPANESE']
      },
      {
        "hex": "#f2c9ac",
        "name1": "洗柿",
        "name2": "あらいがき",
        "name3": "",
        "tag": ["JAPANESE"]
      },
      {
        "hex": "#ec6800",
        "name1": "人参色",
        "name2": "にんじんいろ",
        "name3": "",
        "tag": ["JAPANESE"]
      },
      {
        "hex": "#769164",
        "name1": "老竹色",
        "name2": "おいたけいろ",
        "name3": "",
        "tag": ["JAPANESE"]
      },
      {
        "hex": "#0d0015",
        "name1": "漆黒",
        "name2": "しっこく",
        "name3": "",
        "tag": ["JAPANESE"]
      },
      {
        "hex": "#f3f3f2",
        "name1": "白練",
        "name2": "しろねり",
        "name3": "",
        "tag": ["JAPANESE"]
      },
      {
        "hex": "#fff1cf",
        "name1": "鳥の子色",
        "name2": "とりのこいろ",
        "name3": "",
        "tag": ["JAPANESE"]
      },
      {
        "hex": "#ee7800",
        "name1": "橙色",
        "name2": "だいだいいろ",
        "name3": "",
        "tag": ["JAPANESE"]
      },
      {
        "hex": "#d6e9ca",
        "name1": "白緑",
        "name2": "びゃくろく",
        "name3": "",
        "tag": ["JAPANESE"]
      },
      {
        "hex": "#bbc8e6",
        "name1": "淡藤色",
        "name2": "あわふじいろ",
        "name3": "",
        "tag": ["JAPANESE"]
      },
      {
        "hex": "#eae5e3",
        "name1": "素色",
        "name2": "そしょく",
        "name3": "",
        "tag": ["JAPANESE"]
      },
      {
        "hex": "#fddea5",
        "name1": "蜂蜜色",
        "name2": "はちみついろ",
        "name3": "",
        "tag": ["JAPANESE"]
      },
      {
        "hex": "#eb6238",
        "name1": "照柿",
        "name2": "てりがき",
        "name3": "",
        "tag": ["JAPANESE"]
      },
      {
        "hex": "#93ca76",
        "name1": "淡萌黄",
        "name2": "うすもえぎ",
        "name3": "",
        "tag": ["JAPANESE"]
      },
      {
        "hex": "#bbbcde",
        "name1": "藤色",
        "name2": "ふじいろ",
        "name3": "",
        "tag": ["JAPANESE"]
      },
      {
        "hex": "#e5e4e6",
        "name1": "白梅鼠",
        "name2": "しらうめねず",
        "name3": "",
        "tag": ["JAPANESE"]
      },
      {
        "hex": "#fce2c4",
        "name1": "肌色",
        "name2": "はだいろ",
        "name3": "",
        "tag": ["JAPANESE"]
      },
      {
        "hex": "#ea5506",
        "name1": "赤橙",
        "name2": "あかだいだい",
        "name3": "",
        "tag": ["JAPANESE"]
      },
      {
        "hex": "#93b881",
        "name1": "柳染",
        "name2": "やなぎぞめ",
        "name3": "",
        "tag": ["JAPANESE"]
      },
      {
        "hex": "#8491c3",
        "name1": "紅掛空色",
        "name2": "べにかけそらいろ",
        "name3": "",
        "tag": ["JAPANESE"]
      },
      {
        "hex": "#dcdddd",
        "name1": "白鼠",
        "name2": "しろねず",
        "name3": "",
        "tag": ["JAPANESE"]
      },
      {
        "hex": "#fde8d0",
        "name1": "薄卵色",
        "name2": "うすたまごいろ",
        "name3": "",
        "tag": ["JAPANESE"]
      },
      {
        "hex": "#ea5506",
        "name1": "金赤",
        "name2": "きんあか",
        "name3": "",
        "tag": ["JAPANESE"]
      },
      {
        "hex": "#badcad",
        "name1": "薄萌葱",
        "name2": "うすもえぎ",
        "name3": "",
        "tag": ["JAPANESE"]
      },
      {
        "hex": "#8491c3",
        "name1": "紅碧",
        "name2": "べにみどり",
        "name3": "",
        "tag": ["JAPANESE"]
      },
      {
        "hex": "#dddcd6",
        "name1": "絹鼠",
        "name2": "きぬねず",
        "name3": "",
        "tag": ["JAPANESE"]
      },
      {
        "hex": "#f9c89b",
        "name1": "雄黄",
        "name2": "ゆうおう",
        "name3": "",
        "tag": ["JAPANESE"]
      },
      {
        "hex": "#eb6101",
        "name1": "朱色",
        "name2": "しゅいろ",
        "name3": "",
        "tag": ["JAPANESE"]
      },
      {
        "hex": "#97a791",
        "name1": "深川鼠",
        "name2": "ふかがわねずみ",
        "name3": "",
        "tag": ["JAPANESE"]
      },
      {
        "hex": "#4d5aaf",
        "name1": "紺桔梗",
        "name2": "こんききょう",
        "name3": "",
        "tag": ["JAPANESE"]
      },
      {
        "hex": "#c0c6c9",
        "name1": "灰青",
        "name2": "はいあお",
        "name3": "",
        "tag": ["JAPANESE"]
      },
      {
        "hex": "#f7bd8f",
        "name1": "洒落柿",
        "name2": "しゃれがき",
        "name3": "",
        "tag": ["JAPANESE"]
      },
      {
        "hex": "#e49e61",
        "name1": "小麦色",
        "name2": "こむぎいろ",
        "name3": "",
        "tag": ["JAPANESE"]
      },
      {
        "hex": "#98d98e",
        "name1": "若緑",
        "name2": "わかみどり",
        "name3": "",
        "tag": ["JAPANESE"]
      },
      {
        "hex": "#4d5aaf",
        "name1": "花色",
        "name2": "はないろ",
        "name3": "",
        "tag": ["JAPANESE"]
      },
      {
        "hex": "#afafb0",
        "name1": "銀鼠",
        "name2": "ぎんねず",
        "name3": "",
        "tag": ["JAPANESE"]
      },
      {
        "hex": "#f6b894",
        "name1": "赤香",
        "name2": "あかこう",
        "name3": "",
        "tag": ["JAPANESE"]
      },
      {
        "hex": "#e45e32",
        "name1": "丹色",
        "name2": "にいろ",
        "name3": "",
        "tag": ["JAPANESE"]
      },
      {
        "hex": "#88cb7f",
        "name1": "浅緑",
        "name2": "あさみどり",
        "name3": "",
        'tag': ['JAPANESE']
      },
      {
        "hex": "#4a488e",
        "name1": "紺藍",
        "name2": "こんあい",
        "name3": "",
        'tag': ['JAPANESE']
      },
      {
        "hex": "#adadad",
        "name1": "薄鈍",
        "name2": "うすにび",
        "name3": "",
        'tag': ['JAPANESE']
      },
      {
        "hex": "#f4dda5",
        "name1": "砥粉色",
        "name2": "とのこいろ",
        "name3": "",
        'tag': ['JAPANESE']
      },
      {
        "hex": "#e17b34",
        "name1": "黄茶",
        "name2": "きちゃ",
        "name3": "",
        'tag': ['JAPANESE']
      },
      {
        "hex": "#69b076",
        "name1": "薄緑",
        "name2": "うすみどり",
        "name3": "",
        'tag': ['JAPANESE']
      },
      {
        "hex": "#4d4398",
        "name1": "紅桔梗",
        "name2": "べにききょう",
        "name3": "",
        'tag': ['JAPANESE']
      },
      {
        "hex": "#a3a3a2",
        "name1": "薄墨色",
        "name2": "うすずみいろ",
        "name3": "",
        'tag': ['JAPANESE']
      },
      {
        "hex": "#f1bf99",
        "name1": "肉色",
        "name2": "にくいろ",
        "name3": "",
        'tag': ['JAPANESE']
      },
      {
        "hex": "#dd7a56",
        "name1": "肉桂色",
        "name2": "にっけいいろ",
        "name3": "",
        'tag': ['JAPANESE']
      },
      {
        "hex": "#6b7b6e",
        "name1": "青鈍",
        "name2": "あおにび",
        "name3": "",
        'tag': ['JAPANESE']
      },
      {
        "hex": "#5654a2",
        "name1": "桔梗色",
        "name2": "ききょういろ",
        "name3": "",
        'tag': ['JAPANESE']
      },
      {
        "hex": "#9ea1a3",
        "name1": "錫色",
        "name2": "すずいろ",
        "name3": "",
        'tag': ['JAPANESE']
      },
      {
        "hex": "#f1bf99",
        "name1": "人色",
        "name2": "ひといろ",
        "name3": "",
        'tag': ['JAPANESE']
      },
      {
        "hex": "#db8449",
        "name1": "赤朽葉色",
        "name2": "あかくちばいろ",
        "name3": "",
        'tag': ['JAPANESE']
      },
      {
        "hex": "#bed2c3",
        "name1": "青磁鼠",
        "name2": "せいじねず",
        "name3": "",
        'tag': ['JAPANESE']
      },
      {
        "hex": "#706caa",
        "name1": "藤納戸",
        "name2": "ふじなんど",
        "name3": "",
        'tag': ['JAPANESE']
      },
      {
        "hex": "#9fa0a0",
        "name1": "素鼠",
        "name2": "すねずみ",
        "name3": "",
        'tag': ['JAPANESE']
      },
      {
        "hex": "#efcd9a",
        "name1": "丁子色",
        "name2": "ちょうじいろ",
        "name3": "",
        'tag': ['JAPANESE']
      },
      {
        "hex": "#d66a35",
        "name1": "黄櫨染",
        "name2": "こうろぜん",
        "name3": "",
        'tag': ['JAPANESE']
      },
      {
        "hex": "#93b69c",
        "name1": "薄青",
        "name2": "うすあお",
        "name3": "",
"tag": ["JAPANESE"]
      },
      {
        "hex": "#68699b",
        "name1": "紅掛花色",
        "name2": "べにかけはないろ",
        "name3": "",
"tag": ["JAPANESE"]
      },
      {
        "hex": "#949495",
        "name1": "鼠色",
        "name2": "ねずみいろ",
        "name3": "",
"tag": ["JAPANESE"]
      },
      {
        "hex": "#efcd9a",
        "name1": "香色",
        "name2": "こういろ",
        "name3": "",
"tag": ["JAPANESE"]
      },
      {
        "hex": "#ffd900",
        "name1": "蒲公英色",
        "name2": "たんぽぽいろ",
        "name3": "",
"tag": ["JAPANESE"]
      },
      {
        "hex": "#a6c8b2",
        "name1": "錆青磁",
        "name2": "さびせいじ",
        "name3": "",
"tag": ["JAPANESE"]
      },
      {
        "hex": "#867ba9",
        "name1": "紫苑色",
        "name2": "しおんいろ",
        "name3": "",
"tag": ["JAPANESE"]
      },
      {
        "hex": "#888084",
        "name1": "源氏鼠",
        "name2": "げんじねず",
        "name3": "",
"tag": ["JAPANESE"]
      },
      {
        "hex": "#f0cfa0",
        "name1": "薄香",
        "name2": "うすこう",
        "name3": "",
"tag": ["JAPANESE"]
      },
      {
        "hex": "#ffd900",
        "name1": "黄色",
        "name2": "きいろ",
        "name3": "",
"tag": ["JAPANESE"]
      },
      {
        "hex": "#47885e",
        "name1": "緑青色",
        "name2": "ろくしょういろ",
        "name3": "",
"tag": ["JAPANESE"]
      },
      {
        "hex": "#dbd0e6",
        "name1": "白藤色",
        "name2": "しらふじいろ",
        "name3": "",
"tag": ["JAPANESE"]
      },
      {
        "hex": "#7d7d7d",
        "name1": "灰色",
        "name2": "はいいろ",
        "name3": "",
"tag": ["JAPANESE"]
      },
      {
        "hex": "#edd3a1",
        "name1": "浅黄",
        "name2": "うすき",
        "name3": "",
"tag": ["JAPANESE"]
      },
      {
        "hex": "#ffea00",
        "name1": "中黄",
        "name2": "ちゅうき",
        "name3": "",
"tag": ["JAPANESE"]
      },
      {
        "hex": "#316745",
        "name1": "千歳緑",
        "name2": "ちとせみどり",
        "name3": "",
"tag": ["JAPANESE"]
      },
      {
        "hex": "#a59aca",
        "name1": "藤紫",
        "name2": "ふじむらさき",
        "name3": "",
"tag": ["JAPANESE"]
      },
      {
        "hex": "#7b7c7d",
        "name1": "鉛色",
        "name2": "なまりいろ",
        "name3": "",
        "tag": ["JAPANESE"]
      },
      {
        "hex": "#e0c38c",
        "name1": "枯色",
        "name2": "かれいろ",
        "name3": "",
        "tag": ["JAPANESE"]
      },
      {
        "hex": "#ffec47",
        "name1": "菜の花色",
        "name2": "なのはないろ",
        "name3": "",
        "tag": ["JAPANESE"]
      },
      {
        "hex": "#68be8d",
        "name1": "若竹色",
        "name2": "わかたけいろ",
        "name3": "",
        "tag": ["JAPANESE"]
      },
      {
        "hex": "#7058a3",
        "name1": "菫色",
        "name2": "すみれいろ",
        "name3": "",
        "tag": ["JAPANESE"]
      },
      {
        "hex": "#727171",
        "name1": "鈍色",
        "name2": "にびいろ",
        "name3": "",
        "tag": ["JAPANESE"]
      },
      {
        "hex": "#f3bf88",
        "name1": "淡香",
        "name2": "うすこう",
        "name3": "",
        "tag": ["JAPANESE"]
      },
      {
        "hex": "#fef263",
        "name1": "黄檗色",
        "name2": "きはだいろ",
        "name3": "",
        "tag": ["JAPANESE"]
      },
      {
        "hex": "#3eb370",
        "name1": "緑",
        "name2": "みどり",
        "name3": "",
        "tag": ["JAPANESE"]
      },
      {
        "hex": "#674598",
        "name1": "青紫",
        "name2": "あおむらさき",
        "name3": "",
        "tag": ["JAPANESE"]
      },
      {
        "hex": "#595857",
        "name1": "墨",
        "name2": "すみ",
        "name3": "",
        "tag": ["JAPANESE"]
      },
      {
        "hex": "#f7b977",
        "name1": "杏色",
        "name2": "あんずいろ",
        "name3": "",
        "tag": ["JAPANESE"]
      },
      {
        "hex": "#fcd575",
        "name1": "卵色",
        "name2": "たまごいろ",
        "name3": "",
        "tag": ["JAPANESE"]
      },
      {
        "hex": "#007b43",
        "name1": "常磐色",
        "name2": "ときわいろ",
        "name3": "",
        "tag": ["JAPANESE"]
      },
      {
        "hex": "#674196",
        "name1": "菖蒲色",
        "name2": "しょうぶいろ",
        "name3": "",
        "tag": ["JAPANESE"]
      },
      {
        "hex": "#595455",
        "name1": "丼鼠",
        "name2": "どぶねずみ",
        "name3": "",
        "tag": ["JAPANESE"]
      },
      {
        "hex": "#f19072",
        "name1": "東雲色",
        "name2": "しののめいろ",
        "name3": "",
        "tag": ["JAPANESE"]
      },
      {
        "hex": "#fbd26b",
        "name1": "花葉色",
        "name2": "はなばいろ",
        "name3": "",
        "tag": ["JAPANESE"]
      },
      {
        "hex": "#bed3ca",
        "name1": "千草鼠",
        "name2": "ちぐさねず",
        "name3": "",
        "tag": ["JAPANESE"]
      },
      {
        "hex": "#9079ad",
        "name1": "竜胆色",
        "name2": "りんどういろ",
        "name3": "",
        "tag": ["JAPANESE"]
      },
      {
        "hex": "#524e4d",
        "name1": "消炭色",
        "name2": "けしずみいろ",
        "name3": "",
        "tag": ["JAPANESE"]
      },
      {
        "hex": "#f19072",
        "name1": "曙色",
        "name2": "あけぼのいろ",
        "name3": "",
        "tag": ["JAPANESE"]
      },
      {
        "hex": "#f5e56b",
        "name1": "刈安色",
        "name2": "かりやすいろ",
        "name3": "",
        "tag": ["JAPANESE"]
      },
      {
        "hex": "#92b5a9",
        "name1": "千草色",
        "name2": "ちぐさいろ",
        "name3": "",
        "tag": ["JAPANESE"]
      },
      {
        "hex": "#745399",
        "name1": "江戸紫",
        "name2": "えどむらさき",
        "name3": "",
        "tag": ["JAPANESE"]
      },
      {
        "hex": "#474a4d",
        "name1": "藍墨茶",
        "name2": "あいすみちゃ",
        "name3": "",
        "tag": ["JAPANESE"]
      },
      {
        "hex": "#ee836f",
        "name1": "珊瑚朱色",
        "name2": "さんごしゅいろ",
        "name3": "",
        "tag": ["JAPANESE"]
      },
      {
        "hex": "#eec362",
        "name1": "玉蜀黍色",
        "name2": "とうもろこしいろ",
        "name3": "",
        "tag": ["JAPANESE"]
      },
      {
        "hex": "#7ebea5",
        "name1": "青磁色",
        "name2": "せいじいろ",
        "name3": "",
        "tag": ["JAPANESE"]
      },
      {
        "hex": "#65318e",
        "name1": "本紫",
        "name2": "ほんむらさき",
        "name3": "",
        "tag": ["JAPANESE"]
      },
      {
        "hex": "#383c3c",
        "name1": "羊羹色",
        "name2": "ようかんいろ",
        "name3": "",
        "tag": ["JAPANESE"]
      },
      {
        "hex": "#eb9b6f",
        "name1": "深支子",
        "name2": "こきくちなし",
        "name3": "",
        "tag": ["JAPANESE"]
      },
      {
        "hex": "#ebd842",
        "name1": "金糸雀色",
        "name2": "かなりあいろ",
        "name3": "",
        "tag": ["JAPANESE"]
      },
      {
        "hex": "#7ebeab",
        "name1": "青竹色",
        "name2": "あおたけいろ",
        "name3": "",
        "tag": ["JAPANESE"]
      },
      {
        "hex": "#522f60",
        "name1": "葡萄色",
        "name2": "ぶどういろ",
        "name3": "",
        "tag": ["JAPANESE"]
      },
      {
        "hex": "#2b2b2b",
        "name1": "蝋色",
        "name2": "ろういろ",
        "name3": "",
        "tag": ["JAPANESE"]
      },
      {
        "hex": "#e0815e",
        "name1": "纁",
        "name2": "そひ",
        "name3": "",
        "tag": ["JAPANESE"]
      },
      {
        "hex": "#ffdb4f",
        "name1": "黄支子色",
        "name2": "きくちなしいろ",
        "name3": "",
        "tag": ["JAPANESE"]
      },
      {
        "hex": "#028760",
        "name1": "常磐緑",
        "name2": "ときわみどり",
        "name3": "",
        "tag": ["JAPANESE"]
      },
      {
        "hex": "#493759",
        "name1": "深紫",
        "name2": "ふかむらさき",
        "name3": "",
        "tag": ["JAPANESE"]
      },
      {
        "hex": "#2b2b2b",
        "name1": "黒",
        "name2": "くろ",
        "name3": "",
        "tag": ["JAPANESE"]
      },
      {
        "hex": "#df7163",
        "name1": "浅緋",
        "name2": "うすきひ",
        "name3": "",
        "tag": ["JAPANESE"]
      },
      {
        "hex": "#fbca4d",
        "name1": "支子色",
        "name2": "くちなしいろ",
        "name3": "",
        "tag": ["JAPANESE"]
      },
      {
        "hex": "#3b7960",
        "name1": "木賊色",
        "name2": "とくさいろ",
        "name3": "",
        "tag": ["JAPANESE"]
      },
      {
        "hex": "#2e2930",
        "name1": "紫黒",
        "name2": "しこく",
        "name3": "",
        "tag": ["JAPANESE"]
      },
      {
        "hex": "#180614",
        "name1": "烏羽色",
        "name2": "からすばいろ",
        "name3": "",
        "tag": ["JAPANESE"]
      },
      {
        "hex": "#d57c6b",
        "name1": "真赭",
        "name2": "まそほ",
        "name3": "",
        "tag": ["JAPANESE"]
      },
      {
        "hex": "#fcc800",
        "name1": "向日葵色",
        "name2": "ひまわりいろ",
        "name3": "",
        "tag": ["JAPANESE"]
      },
      {
        "hex": "#2f5d50",
        "name1": "天鵞絨",
        "name2": "びろうど",
        "name3": "",
        "tag": ["JAPANESE"]
      },
      {
        "hex": "#884898",
        "name1": "紫",
        "name2": "むらさき",
        "name3": "",
        "tag": ["JAPANESE"]
      },
      {
        "hex": "#281a14",
        "name1": "鉄黒",
        "name2": "てつぐろ",
        "name3": "",
        "tag": ["JAPANESE"]
      },
      {
        "hex": "#d0826c",
        "name1": "洗朱",
        "name2": "あらいしゅ",
        "name3": "",
        "tag": ["JAPANESE"]
      },
      {
        "hex": "#f8b500",
        "name1": "山吹色",
        "name2": "やまぶきいろ",
        "name3": "",
        "tag": ["JAPANESE"]
      },
      {
        "hex": "#3a5b52",
        "name1": "虫襖",
        "name2": "むしあお",
        "name3": "",
        "tag": ["JAPANESE"]
      },
      {
        "hex": "#c0a2c7",
        "name1": "薄葡萄",
        "name2": "うすぶどう",
        "name3": "",
        "tag": ["JAPANESE"]
      },
      {
        "hex": "#000b00",
        "name1": "濡羽色",
        "name2": "ぬればいろ",
        "name3": "",
        "tag": ["JAPANESE"]
      },  
      {
        "hex": "#ca8269",
        "name1": "遠州茶",
        "name2": "えんしゅうちゃ",
        "name3": "",
        "tag": ["JAPANESE"]
      },
      {
        "hex": "#fabf14",
        "name1": "鬱金色",
        "name2": "うこんいろ",
        "name3": "",
        "tag": ["JAPANESE"]
      },
      {
        "hex": "#475950",
        "name1": "革色",
        "name2": "かわいろ",
        "name3": "",
        "tag": ["JAPANESE"]
      },
      {
        "hex": "#460e44",
        "name1": "紫紺",
        "name2": "しこん",
        "name3": "",
        "tag": ["JAPANESE"]
      },
      {
        "hex": "#250d00",
        "name1": "黒檀",
        "name2": "こくたん",
        "name3": "",
        "tag": ["JAPANESE"]
      },
      {
        "hex": "#bb5548",
        "name1": "紅樺色",
        "name2": "べにかばいろ",
        "name3": "",
        "tag": ["JAPANESE"]
      },
      {
        "hex": "#f7c114",
        "name1": "藤黄",
        "name2": "とうおう",
        "name3": "",
        "tag": ["JAPANESE"]
      },
      {
        "hex": "#00552e",
        "name1": "深緑",
        "name2": "ふかみどり",
        "name3": "",
        "tag": ["JAPANESE"]
      },
      {
        "hex": "#74325c",
        "name1": "暗紅色",
        "name2": "あんこうしょく",
        "name3": "",
        "tag": ["JAPANESE"]
      },
      {
        "hex": "#241a08",
        "name1": "憲法黒茶",
        "name2": "けんぽうくろちゃ",
        "name3": "",
        "tag": ["JAPANESE"]
      },
      {
        "hex": "#ab6953",
        "name1": "赭",
        "name2": "そほ",
        "name3": "",
        "tag": ["JAPANESE"]
      },
      {
        "hex": "#e6b422",
        "name1": "金色",
        "name2": "こんじき",
        "name3": "",
        "tag": ["JAPANESE"]
      },
      {
        "hex": "#005243",
        "name1": "鉄色",
        "name2": "てついろ",
        "name3": "",
        "tag": ["JAPANESE"]
      },
      {
        "hex": "#55295b",
        "name1": "桑の実色",
        "name2": "くわのみいろ",
        "name3": "",
        "tag": ["JAPANESE"]
      },
      {
        "hex": "#16160e",
        "name1": "暗黒色",
        "name2": "あんこくしょく",
        "name3": "",
        "tag": ["JAPANESE"]
      }    
]


export default sampleColors;