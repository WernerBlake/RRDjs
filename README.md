# RRDjs [![Build Status](https://travis-ci.org/WernerBlake/RRDjs.svg?branch=master)](https://travis-ci.org/WernerBlake/RRDjs)

Convert an RRD file into a JSON file within Node.js without the use of underlying dependencies.

## Quick Overview:

```js
$ npm run build origin.rrd destination.json
```
```js
$ node index.js origin.rrd destination.json
```

## Input:
Conversion requires a Round Robin Database file to serve as the origin.

If you've made it this far, you probably know what that means.

If not: click the logo to find out more!

<a href="https://oss.oetiker.ch/rrdtool/" target="_blank">
<img src=https://www.phparch.com/wp-content/uploads/2011/02/rrdtool-3dlogo-e1298487072986-150x66.png />
</a>

## Output:
The JSON file will be made up of two main parts:
1. The Meta data for the entire RRD file
2. All of the DS data
### RRD Meta Data:

```JSON
{
    "meta": {
        "interval": [ 
            {
                "start": 0,
                "end": 1600000000
            },
            { ... },
       ],
        "steps": [ ... ],
        "CF": [ ... ],
        "rows": [ ... ],
        "pdp_per_row": [ ... ],
        "xff": [ ... ],
        "legend": [ 
            "DS_NAME_0",
            "DS_NAME_1",
            ...,
            "DS_NAME_N-1",
            "DS_NAME_N"
        ]
    },
```
Each key within the Meta dictionary corresponds with an array of size equal to the RRA count.

### DS Data:
```JSON
    "DS_NAME_0": {
        "type": "GAUGE",
        "heartbeat": 30,
        "min": 0,
        "max": null,
        "data": {
            "10": [ 
                {
                  "x_value": 0,
                  "y_value": 0
                },
                {...},
                ],
            "30": [ ... ],
            "60": [ ... ],
            "600": [ ... ]
    },
    "DS_NAME_1": { ... },
    ...,
    "DS_NAME_N-1": { ... },
    "DS_NAME_N": { ... }
}
```

## Tests:
Test features are currently being added.

## Tips and tricks:
If you decide to format your JSON file after conversion, you may be left with several hundreds of thousands of rows to scroll through.
Use these commands to help navigate all that data:

<img src=https://cdn.discordapp.com/attachments/792603226741538816/806126002450858014/unknown.png />
