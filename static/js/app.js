


Blockly.defineBlocksWithJsonArray(
  // BEGIN JSON EXTRACT
  [
  //   {
  //   "type": "robot_position",
  //   "message0": "X %1 %2 Y %3 %4 Z %5 %6 E %7",
  //   "args0": [
  //     {
  //       "type": "field_number",
  //       "name": "X",
  //       "value": 0
  //     },
  //     {
  //       "type": "input_dummy"
  //     },
  //     {
  //       "type": "field_number",
  //       "name": "Y",
  //       "value": 0
  //     },
  //     {
  //       "type": "input_dummy"
  //     },
  //     {
  //       "type": "field_number",
  //       "name": "Z",
  //       "value": 0
  //     },
  //     {
  //       "type": "input_dummy"
  //     },
  //     {
  //       "type": "field_number",
  //       "name": "E",
  //       "value": 0
  //     }
  //   ],
  //   "inputsInline": true,
  //   "output": null,
  //   "colour": 260,
  //   "tooltip": "",
  //   "helpUrl": ""
  // },
    {
      "type": "robot_position",
      "message0": "X %1 Y %2 Z %3 E %4",
      "args0": [
        {
          "type": "input_value",
          "name": "X",
          "check": "Number"
        },
        {
          "type": "input_value",
          "name": "Y",
          "check": "Number"
        },
        {
          "type": "input_value",
          "name": "Z",
          "check": "Number"
        },
        {
          "type": "input_value",
          "name": "E",
          "check": "Number"
        }
      ],
      "inputsInline": true,
      "output": null,
      "colour": 260,
      "tooltip": "",
      "helpUrl": ""
    },
    {
      "type": "robot_move",
      "message0": "Move to: %1",
      "args0": [
        {
          "type": "input_value",
          "name": "position",
          "check": "robot_position"
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": 230,
      "tooltip": "",
      "helpUrl": ""
    },

    {
      "type": "robot_wrist",
      "message0": "Move wrist: %1 %2",
      "args0": [
        {
          "type": "input_dummy"
        },
        {
          "type": "field_angle",
          "name": "Angle",
          "angle": 90
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "colour": 230,
      "tooltip": "",
      "helpUrl": ""
    }
  ]
);  // END JSON EXTRACT (Do not delete this comment.)
function valueOrNone(arg) {
  if( arg==="")
  {
    return 'None';
  }
  else{
    return arg;
  }

}

// Blockly.Python['robot_position'] = function(block) {
//   // block.getFie
//   var number_x = valueOrNone(block.getFieldValue('X'));
//   var number_y = valueOrNone(block.getFieldValue('Y'));
//   var number_z = valueOrNone(block.getFieldValue('Z'));
//   var number_e = valueOrNone(block.getFieldValue('E'));
//   // TODO: Assemble Python into code variable.
//
//   var code = "{";
//   code += "\'x\':" + number_x + ", ";
//   code += "\'y\':" + (number_y) + ", ";
//   code += "\'z\':" + (number_z) + ", ";
//   code += "\'e\':" + (number_e);
//   code += '}';
//   // TODO: Change ORDER_NONE to the correct strength.
//   return [code, Blockly.Python.ORDER_NONE];
// };

Blockly.Python['robot_position'] = function(block) {
  var value_x = Blockly.Python.valueToCode(block, 'X', Blockly.Python.ORDER_ATOMIC);
  var value_y = Blockly.Python.valueToCode(block, 'Y', Blockly.Python.ORDER_ATOMIC);
  var value_z = Blockly.Python.valueToCode(block, 'Z', Blockly.Python.ORDER_ATOMIC);
  var value_e = Blockly.Python.valueToCode(block, 'E', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  // var code = '...';

  var code = "{";
  code += "\'x\':" + valueOrNone(value_x) + ", ";
  code += "\'y\':" + valueOrNone(value_y) + ", ";
  code += "\'z\':" + valueOrNone(value_z) + ", ";
  code += "\'e\':" + valueOrNone(value_e);
  code += '}';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['robot_move'] = function(block) {
  var value_position = Blockly.Python.valueToCode(block, 'position', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  console.log(value_position);
  var code = "dict_args = " + value_position + " \n";
  code += "dict_args[\'wait\'] = True \n";
  code += "swift.set_position(**dict_args)\n";
  return code;
};


Blockly.Python['robot_wrist'] = function(block) {
  var angle = block.getFieldValue('Angle');
  var code = 'swift.set_wrist('+angle+')\nsleep(1)\n';
  return code;
};
