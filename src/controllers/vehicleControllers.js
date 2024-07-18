export const getVehicleStatus = async (req, res) => {
  res.send({
    vehicle_id: 132456,
    type: 'Scooter',
    lock: true,
    current_speed: 0,
    battery_level: 100,
    status: 'parking',
    location: '3.142,012',
    last_updated: '2019-07-02T09:00:00.000+08:00',
  });
};
