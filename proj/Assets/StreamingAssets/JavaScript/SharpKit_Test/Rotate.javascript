/* Generated by SharpKit 5 v5.4.4 */

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];
var Rotate = {
    fullname: "Rotate",
    baseTypeName: "UnityEngine.MonoBehaviour",
    assemblyName: "SharpKitWebApp2",
    Kind: "Class",
    definition: {
        ctor: function (){
            this.speed = 0.1;
            UnityEngine.MonoBehaviour.ctor.call(this);
        },
        Start: function (){
        },
        Update: function (){
            this.get_transform().Rotate$$Vector3(UnityEngine.Vector3.op_Multiply$$Vector3$$Single(UnityEngine.Vector3.get_forward(), this.speed));
        }
    }
};
JsTypes.push(Rotate);

