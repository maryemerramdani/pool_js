function getAcceleration (obj){
    if(obj.f !== undefined && obj.m !== undefined){
        return obj.f/obj.m;
    }
    if (obj.Δv !== undefined && obj.Δt !== undefined){
        return obj.Δv/obj.Δt;
    }
    if(obj.d !== undefined && obj.t !== undefined){
        return 2*obj.d/(obj.t*obj.t);
    }
    return"impossible";
}
console.log(getAcceleration({ f: 10, m: 5 })); // Should output 2
console.log(getAcceleration({ f: 10, m: 5, t: 2, d: 100 })); // Should output 2
console.log(getAcceleration({ Δv: 100, Δt: 50 })); // Should output 2
console.log(getAcceleration({ d: 10, t: 2 })); // Should output 5
console.log(getAcceleration({ d: 100, t: 10 })); // Should output 2
console.log(getAcceleration({ f: 10, Δt: 50 })); // Should output "impossible"
console.log(getAcceleration({ m: 10, Δv: 100 })); // Should output "impossible"
console.log(getAcceleration({})); // Should output "impossible"