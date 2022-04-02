import numpy as np

import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func

from flask import Flask, jsonify


#################################################
# Database Setup
#################################################
engine = create_engine("sqlite:///resources/allstock.sqlite")
connection = engine.connect()

# Execute sql query
stocks = engine.execute("SELECT * FROM Stocks LIMIT 1000").all()

# reflect an existing database into a new model
Base = automap_base()

# reflect the tables
Base.prepare(engine, reflect=True)

print(Base.classes.keys())
# stocks = Base.classes.Stocks
# print(stocks)

#################################################
# Flask Setup
#################################################
app = Flask(__name__)

#################################################
# Flask Routes
#################################################

@app.route("/")
def welcome():
    """List all available api routes."""
    return (
        f"Available Routes:<br/>"
        f"/api/v1.0/all_stocks<br/>"
    )

@app.route("/api/v1.0/all_stocks")
def names():
    # Create our session (link) from Python to the sqlite
    session = Session(engine)

    """Return a list of all stocks"""
    # Query all stocks
    results = stocks

    session.close()

    all_stocks = []
    for index, date, open_price, high_price, low_price, close_price, volume, Symbol, Name, Industry in results:
        stock_dict = {}
        # stock_dict["index"] = index
        stock_dict["date"] = date
        stock_dict["open"] = open_price
        stock_dict["high"] = high_price
        stock_dict["low"] = low_price
        stock_dict["close"] = close_price
        stock_dict["volume"] = volume
        stock_dict["symbol"] = Symbol
        stock_dict["name"] = Name
        stock_dict["industry"] = Industry
        all_stocks.append(stock_dict)

    return jsonify(all_stocks)

if __name__ == '__main__':
    app.run(debug=True)
