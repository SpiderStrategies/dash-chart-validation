module.exports = {
  additionalProperties: false,
  properties: {
    graph: {
      type: 'object',
      required: true,
      additionalProperties: false,
      properties: {
        title: {
          description: 'The title of the chart',
          type: 'string',
          required: false
        },
        refreshEveryNSeconds: {
          description: 'Set how many seconds to refresh -- totally ignored, but part of panic API',
          type: 'number',
          required: false
        },
        type: {
          description: 'Sets the type of chart -- totally ignored, but part of the panic API',
          type: 'string',
          required: false
        },
        total: {
          description: 'Displays totals -- totally ignored, but part of panic API',
          type: 'boolean',
          required: false
        },
        graphType: {
          description: 'Controls the chart type -- totally ignored, but part of panic API',
          type: 'string',
          required: false
        },
        yAxis: {
          description: 'Scales values on the y axis-- totally ignored, but part of panic API',
          type: 'any',
          required: false
        },
        xAxis: {
          description: 'Scales values on the y axis-- totally ignored, but part of panic API',
          type: 'any',
          required: false
        },
        error: {
          description: 'Used to report an error -- totally ignored, but part of panic API',
          type: 'any',
          required: false
        },
        datasequences: {
          description: 'Each datasequence',
          type: 'array',
          required: true,
          minItems: 1,
          items: {
            description: 'Each datasequence',
            additionalProperties: false,
            type: 'object',
            properties: {
              title: {
                description: 'Datasequence title',
                type: 'string',
                required: true
              },
              color: {
                description: 'Sets a datasequence color -- totally ignored',
                type: 'string',
                required: false
              },
              datapoints: {
                description: 'The array of datapoints in the datasequence',
                type: 'array',
                required: true,
                minItems: 1,
                items: {
                  type: 'object',
                  required: true,
                  additionalProperties: false,
                  properties: {
                    title: {
                      type: ['boolean', 'string', 'number'],
                      required: true,
                      description: 'The x value'
                    },
                    value: {
                      description: 'The y value',
                      conform: function (v) {
                        // Custom comform that allows numbers or nulls
                        if (v == +v) {
                          v = +v
                        }
                        return typeof v === 'number' || v === null
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
